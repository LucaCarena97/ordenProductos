export function footerComponent() {
    const footer = document.createElement("footer");
    footer.innerHTML = "<h1>Componente Footer</h1>";
    footer.style.border = "solid 3px black";
    footer.style.padding = "12px";
    return footer;
}
