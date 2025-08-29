export default () => {
  try {
    const language = localStorage.getItem('language')
    if (language === 'english') {
      document.documentElement.classList.add('english')
    } else {
      document.documentElement.classList.remove('english')
    }
  } catch (e) {
    // ignore errors
  }
}
