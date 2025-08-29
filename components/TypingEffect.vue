<script setup>
import { ref, onMounted } from 'vue'
// const prefix = 'Desenvolvedor '
// const phrases = [
//   'de Segurança da Informação',
//   'de Pentest',
//   'de Aplicações Seguras',
//   'de Automação e Bots Seguros',
// ]
const phrases = [
  ["Desenvolvedor ", "Full Stack"],
  ["Entusiasta", " em Cibersegurança"]
]

const displayedText = ref("")
const typingSpeed = 100 // ms por caractere
const deletingSpeed = 50
const delayBetweenPhrases = 2000

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function typeText(text) {
  for (let i = 0; i < text.length; i++) {
    displayedText.value += text.charAt(i)
    await sleep(typingSpeed)
  }
}

async function deleteText(count) {
  for (let i = 0; i < count; i++) {
    displayedText.value = displayedText.value.slice(0, -1)
    await sleep(deletingSpeed)
  }
}

async function runTypingEffect() {
  let index = 0
  while (true) {
    const [prefix, text] = phrases[index]

    // digita o prefixo
    await typeText(prefix)

    // digita o texto
    await typeText(text)
    await sleep(delayBetweenPhrases)

    // apaga o texto
    await deleteText(text.length)

    // apaga o prefixo
    await deleteText(prefix.length)

    // próxima frase
    index = (index + 1) % phrases.length
  }
}


onMounted(() => {
  runTypingEffect()
})
</script>

<template>
  <h2>{{ displayedText }}<span class="cursor">|</span></h2>
</template>

<style scoped>
.cursor {
  display: inline-block;
  width: 1ch;
  animation: blink 1s infinite step-start;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
