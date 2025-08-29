export const useTheme = () => {
  const current = ref<'light' | 'dark'>()

  const getSavedTheme = (): 'light' | 'dark' => {
    if (process.client) {
      return (localStorage.getItem('theme') as 'light' | 'dark') || 'light'
    }
    return 'light'
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

    const newTheme = current.value === 'dark' ? 'light' : 'dark'
    current.value = newTheme
    localStorage.setItem('theme', newTheme)

    const html = document.documentElement
    html.classList.remove('light', 'dark')
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
