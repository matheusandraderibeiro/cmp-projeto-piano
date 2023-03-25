const teclas = document.querySelectorAll (".key");
const objetoTeclasPrecionadas = {
"Tab": () => quandoATeclaEstaPrecionada (teclas[0]),
"1": () => quandoATeclaEstaPrecionada (teclas[1]),
"q": () => quandoATeclaEstaPrecionada (teclas[2]),
"2": () => quandoATeclaEstaPrecionada (teclas[3]),
"w": () => quandoATeclaEstaPrecionada (teclas[4]),
"e": () => quandoATeclaEstaPrecionada (teclas[5]),
"4": () => quandoATeclaEstaPrecionada (teclas[6]),
"r": () => quandoATeclaEstaPrecionada (teclas[7]),
"5": () => quandoATeclaEstaPrecionada (teclas[8]),
"t": () => quandoATeclaEstaPrecionada (teclas[9]),
"6": () => quandoATeclaEstaPrecionada (teclas[10]),
"y": () => quandoATeclaEstaPrecionada (teclas[11]),
"u": () => quandoATeclaEstaPrecionada (teclas[12]),
"8": () => quandoATeclaEstaPrecionada (teclas[13]),
"i": () => quandoATeclaEstaPrecionada (teclas[14]),
"9": () => quandoATeclaEstaPrecionada (teclas[15]),
"o": () => quandoATeclaEstaPrecionada (teclas[16]),
"p": () => quandoATeclaEstaPrecionada (teclas[17]),
"-": () => quandoATeclaEstaPrecionada (teclas[18]),
"[": () => quandoATeclaEstaPrecionada (teclas[19]),
"a": () => quandoATeclaEstaPrecionada (teclas[20]),
"z": () => quandoATeclaEstaPrecionada (teclas[21]),
"s": () => quandoATeclaEstaPrecionada (teclas[22]),
"x": () => quandoATeclaEstaPrecionada (teclas[23]),
"c": () => quandoATeclaEstaPrecionada (teclas[24]),
"f": () => quandoATeclaEstaPrecionada (teclas[25]),
"v": () => quandoATeclaEstaPrecionada (teclas[26]),
"g": () => quandoATeclaEstaPrecionada (teclas[27]),
"b": () => quandoATeclaEstaPrecionada (teclas[28]),
"n": () => quandoATeclaEstaPrecionada (teclas[29]),
"j": () => quandoATeclaEstaPrecionada (teclas[30]),
"m": () => quandoATeclaEstaPrecionada (teclas[31]),
"k": () => quandoATeclaEstaPrecionada (teclas[32]),
",": () => quandoATeclaEstaPrecionada (teclas[33]),
"l": () => quandoATeclaEstaPrecionada (teclas[34]),
".": () => quandoATeclaEstaPrecionada (teclas[35])
}
const objetoTeclas = {
    "Tab": () => quandoATeclaNaoEstaPrecionada (teclas[0]),
    "1": () => quandoATeclaNaoEstaPrecionada (teclas[1]),
    "q": () => quandoATeclaNaoEstaPrecionada (teclas[2]),
    "2": () => quandoATeclaNaoEstaPrecionada (teclas[3]),
    "w": () => quandoATeclaNaoEstaPrecionada (teclas[4]),
    "e": () => quandoATeclaNaoEstaPrecionada (teclas[5]),
    "4": () => quandoATeclaNaoEstaPrecionada (teclas[6]),
    "r": () => quandoATeclaNaoEstaPrecionada (teclas[7]),
    "5": () => quandoATeclaNaoEstaPrecionada (teclas[8]),
    "t": () => quandoATeclaNaoEstaPrecionada (teclas[9]),
    "6": () => quandoATeclaNaoEstaPrecionada (teclas[10]),
    "y": () => quandoATeclaNaoEstaPrecionada (teclas[11]),
    "u": () => quandoATeclaNaoEstaPrecionada (teclas[12]),
    "8": () => quandoATeclaNaoEstaPrecionada (teclas[13]),
    "i": () => quandoATeclaNaoEstaPrecionada (teclas[14]),
    "9": () => quandoATeclaNaoEstaPrecionada (teclas[15]),
    "o": () => quandoATeclaNaoEstaPrecionada (teclas[16]),
    "p": () => quandoATeclaNaoEstaPrecionada (teclas[17]),
    "-": () => quandoATeclaNaoEstaPrecionada (teclas[18]),
    "[": () => quandoATeclaNaoEstaPrecionada (teclas[19]),
    "a": () => quandoATeclaNaoEstaPrecionada (teclas[20]),
    "z": () => quandoATeclaNaoEstaPrecionada (teclas[21]),
    "s": () => quandoATeclaNaoEstaPrecionada (teclas[22]),
    "x": () => quandoATeclaNaoEstaPrecionada (teclas[23]),
    "c": () => quandoATeclaNaoEstaPrecionada (teclas[24]),
    "f": () => quandoATeclaNaoEstaPrecionada (teclas[25]),
    "v": () => quandoATeclaNaoEstaPrecionada (teclas[26]),
    "g": () => quandoATeclaNaoEstaPrecionada (teclas[27]),
    "b": () => quandoATeclaNaoEstaPrecionada (teclas[28]),
    "n": () => quandoATeclaNaoEstaPrecionada (teclas[29]),
    "j": () => quandoATeclaNaoEstaPrecionada (teclas[30]),
    "m": () => quandoATeclaNaoEstaPrecionada (teclas[31]),
    "k": () => quandoATeclaNaoEstaPrecionada (teclas[32]),
    ",": () => quandoATeclaNaoEstaPrecionada (teclas[33]),
    "l": () => quandoATeclaNaoEstaPrecionada (teclas[34]),
    ".": () => quandoATeclaNaoEstaPrecionada (teclas[35])
    }

teclas.forEach ((tecla) => {
    tecla.addEventListener ("mousedown", () => quandoATeclaEstaPrecionada (tecla));
    tecla.addEventListener ("mouseup", () => quandoATeclaNaoEstaPrecionada (tecla));
});

document.addEventListener ("keydown", (event) => {
    //event.preventDefault();
    objetoTeclasPrecionadas[event.key]();
});

document.addEventListener ("keyup", (event) => {
    //event.preventDefault();
    objetoTeclas[event.key]();
});

function tocaSom (nota) {
    const audio = new Audio(`../Projeto_Piano/src/music/${nota}.wav`);
    audio.play();
}

function quandoATeclaEstaPrecionada (tecla) {
    tocaSom (tecla.getAttribute("data-note"));

    if (tecla.className.includes("black")) {
        tecla.classList.add ("black-pressed");
        return;
    } else {
        tecla.style.background = "#666666"
    }
}

function quandoATeclaNaoEstaPrecionada (tecla) {
    if (tecla.className.includes("black")) {
        tecla.classList.remove ("black-pressed");
        return;
    } else {
        tecla.style.background = "#ffffff"
    }  
}
