export function focus(selector) {
    setTimeout(() => {
        const element = document.querySelector(selector);
        if (element) {
            element.focus()
        }
    },10);
}