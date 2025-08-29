<template>
  <div
    class="terminal"
    :style="{ top: position.y + 'px', left: position.x + 'px' }"
    @mousedown.stop
  >
    <!-- Header do terminal (drag handle) -->
    <div class="terminal-header" @mousedown="startDrag" @click="focusInput">
      <div class="buttons">
        <span class="btn red"></span>
        <span class="btn yellow"></span>
        <span class="btn green"></span>
      </div>
      <span class="title">guest@lw: ~</span>
    </div>

    <!-- Corpo do terminal -->
    <div class="terminal-body" ref="body">
      <div v-for="(line, index) in output" :key="index" class="line">
        <span>{{ line }}</span>
      </div>
      
      <!-- Linha de comando -->
      <div class="line">
        <span class="prompt">guest@lw:~$</span>
        <input
          v-model="command"
          @keyup.enter="handleCommand"
          class="input"
          ref="commandInput"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'

// Comandos
const command = ref('')
const output = ref([
  "Bem-vindo ao terminal LW's Dev Studio!",
  "Digite 'help' para ver os comandos disponíveis."
])

// Scroll
const body = ref<HTMLDivElement | null>(null)
const commandInput = ref<HTMLInputElement | null>(null)

// Posicao inicial da janela
const position = ref({ x: 100, y: 100 })
let isDragging = false
let offset = { x: 0, y: 0 }

// Drag functions
const startDrag = (e: MouseEvent) => {
  isDragging = true
  offset.x = e.clientX - position.value.x
  offset.y = e.clientY - position.value.y
  window.addEventListener('mousemove', onDrag)
  window.addEventListener('mouseup', stopDrag)
}

const onDrag = (e: MouseEvent) => {
  if (!isDragging) return
  position.value.x = e.clientX - offset.x
  position.value.y = e.clientY - offset.y
}

const stopDrag = () => {
  isDragging = false
  window.removeEventListener('mousemove', onDrag)
  window.removeEventListener('mouseup', stopDrag)
}

// Focar input ao clicar no terminal
const focusInput = async () => {
  await nextTick()
  commandInput.value?.focus()
}

// Função para gerar número aleatório
const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min

// Handle commands
const handleCommand = async () => {
  if (!command.value.trim()) return
  const cmd = command.value.toLowerCase()
  let response = ''

  switch (cmd) {
    case 'help':
      response = `
Comandos disponíveis:
 - help: mostra os comandos
 - about: sobre mim
 - projects: meus projetos
 - contact: contatos
 - whoami: info do usuário
 - skills: minhas skills
 - education: formação
 - joke: conta uma piada
 - fortune: sorte
 - date: data e hora
 - clear: limpa o terminal
      `.trim()
      break
    case 'about':
      response = "Sou Lucas Waldes, dev fullstack. Crio soluções web, bots e automações."
      break
    case 'projects':
      response = `
Projetos:
 - WarpStore: SaaS de sites para servidores de jogos
 - Bots Discord: automações
 - Sites institucionais
      `.trim()
      break
    case 'contact':
      response = "Email: lucas@example.com\nLinkedIn: linkedin.com/in/lucaswaldes"
      break
    case 'whoami':
      response = "guest@lw: Desenvolvedor Fullstack"
      break
    case 'skills':
      response = "JavaScript, TypeScript, Vue, Nuxt, Node.js, Python, Django, APIs, Bots"
      break
    case 'education':
      response = "Formação: Análise e Desenvolvimento de Sistemas - FATEC Zona Leste"
      break
    case 'joke':
      const jokes = [
        "Por que o JavaScript foi ao médico? Porque não conseguia 'callback'.",
        "Qual é o CSS favorito dos gatos? O 'purr-fect'.",
        "Por que o programador confunde Halloween com Natal? Porque Oct 31 == Dec 25."
      ]
      response = jokes[randomInt(0, jokes.length -1)]
      break
    case 'fortune':
      const fortunes = [
        "Hoje é um ótimo dia para codar algo novo!",
        "Sorte e café caminham juntos.",
        "O conhecimento vem para quem busca."
      ]
      response = fortunes[randomInt(0, fortunes.length -1)]
      break
    case 'date':
      response = new Date().toLocaleString()
      break
    case 'clear':
      output.value = []
      command.value = ''
      return
    default:
      response = `Comando não encontrado: ${cmd}`
  }

  output.value.push(`guest@lw:~$ ${command.value}`)
  output.value.push(response)
  command.value = ''

  await nextTick()
  if (body.value) {
    body.value.scrollTop = body.value.scrollHeight
  }
}
</script>

<style scoped>
.terminal {
  position: absolute;
  width: 80%;
  max-width: 800px;
  height: 500px;
  background: #0c0c0c;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0,0,0,0.6);
  display: flex;
  flex-direction: column;
  font-family: "Consolas", "Courier New", monospace;
  cursor: default;
  user-select: none;
  bottom: 100px;
}

.terminal-header {
  background: #2d2d2d;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #ccc;
  font-size: 14px;
  cursor: grab;
}

.buttons {
  display: flex;
  gap: 6px;
}
.btn {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
}
.red { background: #ff5f56; }
.yellow { background: #ffbd2e; }
.green { background: #27c93f; }

.title {
  flex: 1;
  text-align: center;
  font-weight: bold;
}

.terminal-body {
  flex: 1;
  padding: 10px;
  color: #00ff00;
  font-size: 14px;
  overflow-y: auto;
}

.line {
  white-space: pre-wrap;
  margin-bottom: 4px;
}

.prompt {
  color: #00ff00;
  margin-right: 5px;
}

.input {
  background: transparent;
  border: none;
  outline: none;
  flex: 1;
  font-weight: 500;
  font-size: 16px;
}
</style>
