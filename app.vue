<template>
  <div>
    <!-- Loader inicial -->
    <div id="preloader">
      <div class="spinner"></div>
    </div>

    <!-- Conteúdo real -->
    <NetworkCanvas />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useHead } from '#imports'

useHead({
  script: [
    {
      innerHTML: `
        (function() {
          try {
            const theme = localStorage.getItem('theme')
            const language = localStorage.getItem('language')
            if (theme === 'light') {
              document.documentElement.classList.add('light')
            } else {
              document.documentElement.classList.remove('light')
            }
            if (language === 'english') {
              document.documentElement.classList.add('english')
            } else {
              document.documentElement.classList.remove('english')
            }
          } catch(e) {}
        })();
      `,
      type: 'text/javascript',
      // @ts-ignore
      dangerouslyDisableSanitizers: ['innerHTML'],
    }
  ]
})

onMounted(() => {
  // Quando o Nuxt e o conteúdo da página estiverem montados, escondemos o loader
  const preloader = document.getElementById('preloader')
  if (preloader) {
    preloader.style.opacity = '0'
    preloader.style.transition = 'opacity 0.5s ease'
    setTimeout(() => {
      preloader.style.display = 'none'
    }, 500) // espera a transição acabar
  }
})
</script>

<style scoped>
#preloader {
  position: fixed;
  inset: 0;
  background-color: var(--bg-color, #111);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  opacity: 1;
}

#preloader .spinner {
  width: 50px;
  height: 50px;
  border: 5px solid rgba(255,255,255,0.2);
  border-top-color: var(--text-color, #fff);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
