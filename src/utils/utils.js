export function focus(selector) {
    setTimeout(() => {
        let element = document.querySelector(selector);
        if (element) {
            element.focus()
        }
    },10);
}