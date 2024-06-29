document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('#toggle')
    const currentTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    const textMode = document.querySelector('#text-mode')

    if(currentTheme === 'dark') {
        document.documentElement.classList.add('dark')
        toggle.checked = true
    } else {
        document.documentElement.classList.remove('dark')
        toggle.checked = false
    }

    toggle.addEventListener('change', (e) => {
        if(e.target.checked) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
            textMode.innerText = 'Dark Mode'
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
            textMode.innerText = 'Light Mode'
        }
    })
})