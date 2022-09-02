import themes from './themes.json'

export const setTheme = (index) => {

    const rootElement = document.querySelector(":root");

    if (!index) {

        let i = Math.floor(Math.random() * ((themes.length - 1) - 0 + 1) + 0)

        rootElement.style.setProperty('--dark', themes[i].dark)
        rootElement.style.setProperty('--brown', themes[i].brown)
        rootElement.style.setProperty('--coffee', themes[i].coffee)
        rootElement.style.setProperty('--mustard', themes[i].mustard)
    } else {
        rootElement.style.setProperty('--dark', themes[index].dark)
        rootElement.style.setProperty('--brown', themes[index].brown)
        rootElement.style.setProperty('--coffee', themes[index].coffee)
        rootElement.style.setProperty('--mustard', themes[index].mustard)
    }
}