function doIt() {
    var theText = "Hello World";
    alert(theText);
}
function doItTwo() {
    // 1. Seleciona o elemento div usando a propriedade id
    var app = document.getElementById("app");
    // 2. Cria um novo elemento <p></p> programáticamente
    var p = document.createElement("p");
    // 3. Adiciona conteúdo de texto
    p.textContent = "Olá, Mundo!";
    // 4. Acrescenta o elemento p no elemento div
    app === null || app === void 0 ? void 0 : app.appendChild(p);
}
function doItThree() {
    // 1. Seleciona o elemento div usando a propriedade id
    var app = document.getElementById("app");
    // 2. Cria um novo elemento <p></p> programáticamente
    var p = document.createElement("p");
    // 3. Adiciona conteúdo de texto
    app.textContent = "";
    // 4. Acrescenta o elemento p no elemento div
    app === null || app === void 0 ? void 0 : app.appendChild(p);
}
