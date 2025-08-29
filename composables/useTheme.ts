export const useTheme = () => {
  const current = ref<'dark' | 'light'>()

  const getSavedTheme = (): 'dark' | 'light' => {
    if (process.client) {
      return (localStorage.getItem('theme') as 'dark' | 'light') || 'dark'
    }
    return 'dark'
  }

  const applyTheme = () => {
    if (!process.client) return

    const saved = getSavedTheme()
    current.value = saved

    const html = document.documentElement
    html.classList.remove('light', 'dark')
    html.classList.add(saved)
  }

  const toggleTheme = () => {
    if (!process.client) return

    const newTheme = current.value === 'light' ? 'dark' : 'light'
    current.value = newTheme
    localStorage.setItem('theme', newTheme)

    const html = document.documentElement
    html.classList.remove('dark', 'light')
    html.classList.add(newTheme)
  }

  // se ainda não foi setado, setar uma vez
  if (process.client && current.value === undefined) {
    current.value = getSavedTheme()
  }

  return {
    theme: current,
    toggleTheme,
    applyTheme
  }
}
