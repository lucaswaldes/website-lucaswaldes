import { useI18n } from 'vue-i18n'

export const useLanguage = () => {
  const { locale } = useI18n()
  const current = ref<'portuguese' | 'english'>()

  const getSavedLanguage = (): 'portuguese' | 'english' => {
    if (process.client) {
      return (localStorage.getItem('language') as 'portuguese' | 'english') || 'portuguese'
    }
    return 'portuguese'
  }

  const applyLanguage = () => {
    if (!process.client) return

    const saved = getSavedLanguage()
    current.value = saved
    locale.value = saved === 'portuguese' ? 'pt' : 'en' // 🔑 muda o i18n

    const html = document.documentElement
    html.classList.remove('portuguese', 'english')
    html.classList.add(saved)
  }

  const toggleLanguage = () => {
    if (!process.client) return

    const newLanguage = current.value === 'english' ? 'portuguese' : 'english'
    current.value = newLanguage
    localStorage.setItem('language', newLanguage)

    // 🔑 troca idioma no i18n
    locale.value = newLanguage === 'portuguese' ? 'pt' : 'en'

    const html = document.documentElement
    html.classList.remove('portuguese', 'english')
    html.classList.add(newLanguage)
  }

  // inicializa se ainda não tiver nada
  if (process.client && current.value === undefined) {
    current.value = getSavedLanguage()
    locale.value = current.value === 'portuguese' ? 'pt' : 'en'
  }

  return {
    language: current,
    toggleLanguage,
    applyLanguage
  }
}
