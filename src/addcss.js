import css from "virtual:css";

export function initCss() {
    const style = document.createElement("style");
    style.id = "dmoj-css";
    style.textContent = css;
    document.head.appendChild(style);
}
