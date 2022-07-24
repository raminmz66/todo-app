export function focus(selector) {
    setTimeout(() => {
        element = document.querySelector(selector);
        if (element) {
            element.focus()
        }
    },10);
}