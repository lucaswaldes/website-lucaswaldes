<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

// Theme e Language
const { theme, toggleTheme } = useTheme()
const { language, toggleLanguage } = useLanguage()

// Scroll
const scrolled = ref(false)
const handleScroll = () => scrolled.value = window.scrollY > 30

// Menu mobile
const menuOpen = ref(false)
const toggleMenu = () => menuOpen.value = !menuOpen.value

// Largura da tela para responsivo
const isMobile = computed(() => width.value <= 768)
const updateWidth = () => width.value = window.innerWidth

const width = ref(0) // inicializa com 0

onMounted(() => {
  width.value = window.innerWidth // só aqui podemos acessar window
  window.addEventListener('resize', () => {
    width.value = window.innerWidth
  })
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', updateWidth)
})

// i18n
const { tm } = useI18n()
</script>

<template>
  <div class="header" :class="{ scrolled: scrolled }">
    <span>LW</span>

    <!-- Menu desktop -->
    <ul v-if="!isMobile">
      <li><a href="#about">{{ tm('navAbout') }}</a></li>
      <li><a href="#services">{{ tm('navServices') }}</a></li>
      <li><a href="#timeline">{{ tm('navTimeline') }}</a></li>
      <li><a href="#feedback">{{ tm('navFeedbacks') }}</a></li>
    </ul>

    <div class="options" v-if="!isMobile">
      <div class="languages" @click="toggleLanguage">
        <img v-if="language === 'portuguese'" src="@/assets/icons/flag-br.svg" width="25" alt="">
        <img v-if="language === 'english'" src="@/assets/icons/flag-usa.svg" width="25" alt="">
        <p>{{ language === 'portuguese' ? 'Português' : 'English' }}</p>
      </div>
      <svg v-if="theme === 'light'" class="theme" width="20" @click="toggleTheme" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"/>
      </svg>
      <svg v-else class="theme" width="20" @click="toggleTheme" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/>
      </svg>
    </div>

    <!-- Hamburger mobile -->
    <svg v-if="isMobile" @click="toggleMenu" xmlns="http://www.w3.org/2000/svg" width="40" viewBox="0 0 640 640" style="cursor:pointer">
      <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/>
    </svg>

    <!-- Menu mobile dropdown -->
    <div v-if="menuOpen && isMobile" class="mobile-menu">
      <ul>
        <li @click="toggleMenu" ><a href="#about">{{ tm('navAbout') }}</a></li>
        <li @click="toggleMenu" ><a href="#services">{{ tm('navServices') }}</a></li>
        <li @click="toggleMenu" ><a href="#timeline">{{ tm('navTimeline') }}</a></li>
        <li @click="toggleMenu" ><a href="#feedback">{{ tm('navFeedbacks') }}</a></li>
      </ul>
      <div class="options">
        <div class="languages" @click="toggleLanguage">
          <img v-if="language === 'portuguese'" src="@/assets/icons/flag-br.svg" width="25" alt="">
          <img v-if="language === 'english'" src="@/assets/icons/flag-usa.svg" width="25" alt="">
          <p>{{ language === 'portuguese' ? 'Português' : 'English' }}</p>
        </div>
              <svg v-if="theme === 'light'" class="theme" width="20" @click="toggleTheme" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"/>
      </svg>
      <svg v-else class="theme" width="20" @click="toggleTheme" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/>
      </svg>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  // padding: 0 2rem;
  z-index: 999;
  transition: all 0.2s ease-in-out;
  // background-color: var(--bg-secondary-color);

  svg {
    fill: var(--text-color);
  }

  &.scrolled {
    height: 70px;
    border-bottom: 1px solid gray;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  background-color: var(--bg-secondary-color);

  }

  span {
    font-weight: 900;
    font-family: "Orbitron", sans-serif;
    color: var(--primary-color);
    font-size: 32px !important;
    max-width: 180px;
    width: 170px;
  }

  ul {
    list-style: none;
    display: flex;
    gap: 35px;
    align-items: center;
    width: 410px;
    justify-content: centern;

    li a {
      text-decoration: none;
    }
  }

  .options {
    display: flex;
    align-items: center;
    gap: 20px;
    width: 170px;
    justify-content: space-between;
    .languages {
        display: flex;
        gap: 10px;
        cursor: pointer;
    }

    svg {
        cursor: pointer;
        fill: var(--text-color);
    }
  }
}

.mobile-menu {
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  background: var(--bg-secondary-color);
  padding: 1rem 0;
  z-index: 998;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    list-style: none;
    margin: 0;
    padding: 0;

    li a {
      color: var(--text-color);
      text-decoration: none;
      font-size: 18px;
    }
  }

  .options {
    justify-content: center;
    margin-top: 10px;
  }
}
</style>
