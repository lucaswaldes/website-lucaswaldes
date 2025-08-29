<template>
  <div>
    <!-- Preloader -->
    <!-- <div v-if="loading" class="preloader">
      <div class="spinner"></div>
    </div> -->

    <!-- Canvas da rede -->
    <canvas ref="canvas" class="network-bg"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const canvas = ref<HTMLCanvasElement | null>(null)
let ctx: CanvasRenderingContext2D | null
let points: {x:number,y:number,vx:number,vy:number}[] = []
let animationFrameId: number

const pointCount = 800
//const loading = ref(true)

function getColor(alpha = 1) {
  const rootStyle = getComputedStyle(document.documentElement)
  let color = rootStyle.getPropertyValue('--text-color').trim()

  // Se estiver em hexadecimal (#ffffff), converte para rgb
  if (color.startsWith('#')) {
    const r = parseInt(color.substr(1, 2), 16)
    const g = parseInt(color.substr(3, 2), 16)
    const b = parseInt(color.substr(5, 2), 16)
    return `rgba(${r},${g},${b},${alpha})`
  }

  // Se já estiver em formato rgb(a), só ajusta alpha
  if (color.startsWith('rgb')) {
    color = color.replace(/rgba?\(([^)]+)\)/, '$1') // pega "r,g,b"
    return `rgba(${color},${alpha})`
  }

  // fallback
  return `rgba(255,255,255,${alpha})`
}

function resizeCanvas() {
  const c = canvas.value!
  c.width = window.innerWidth
  c.height = document.body.scrollHeight
}

function animate() {
  const c = canvas.value!
  ctx!.clearRect(0, 0, c.width, c.height)

  // desenhar pontos
  points.forEach(p => {
    p.x += p.vx
    p.y += p.vy * 0.1

    if (p.x < 0 || p.x > c.width) p.vx *= -1
    if (p.y < 0 || p.y > c.height) p.vy *= -1

    ctx!.fillStyle = getColor(1)
    ctx!.beginPath()
    ctx!.arc(p.x, p.y, 2, 0, Math.PI * 2)
    ctx!.fill()
  })

  // linhas entre pontos próximos
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const dx = points[i].x - points[j].x
      const dy = points[i].y - points[j].y
      const dist = Math.sqrt(dx*dx + dy*dy)
      if (dist < 120) {
        const rootStyle = getComputedStyle(document.documentElement)
  const bgColor = rootStyle.getPropertyValue('--text-color').trim()
  
        // ctx!.strokeStyle = `rgba(255,255,255,${(1 - dist / 120) * 0.5})`
        ctx!.strokeStyle = getColor((1 - dist / 120) * 1)
        ctx!.lineWidth = 1
        ctx!.beginPath()
        ctx!.moveTo(points[i].x, points[i].y)
        ctx!.lineTo(points[j].x, points[j].y)
        ctx!.stroke()
      }
    }
  }

  animationFrameId = requestAnimationFrame(animate)
}

onMounted(() => {
  const c = canvas.value!
  ctx = c.getContext('2d')!

  resizeCanvas()

  // criar pontos aleatórios
  for (let i = 0; i < pointCount; i++) {
    points.push({
      x: Math.random() * c.width,
      y: Math.random() * document.body.scrollHeight,
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 1.5
    })
  }

  // quando a rede estiver pronta, tira o preloader
  //loading.value = false

  window.addEventListener('resize', resizeCanvas)
  animate()
})

onBeforeUnmount(() => {
  cancelAnimationFrame(animationFrameId)
  window.removeEventListener('resize', resizeCanvas)
})
</script>

<style scoped>

@media (max-width: 768px) {
  .network-bg {
    visibility: hidden;
    display: none;
  }
}

.network-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
}

/* Preloader */
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--bg-color);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 5px solid rgba(255,255,255,0.2);
  border-top-color: var(--text-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
