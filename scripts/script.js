const blocos = document.querySelectorAll(".blocos");
const xis = document.getElementById("xispng");
const bola = document.getElementById("bolapng");

var execução = false;
var tipo = "";

let pointx = localStorage.getItem("placarx");
placarx.textContent = pointx;

let plaBall = localStorage.getItem("boardBola");
if (!isNaN(plaBall)) {
  boardBola.textContent = parseInt(plaBall);
}

xis.addEventListener("click", function () {
  if (execução) {
    return;
  }
  tipo = "xis";
});

bola.addEventListener("click", function () {
  if (execução) {
    return;
  }
  tipo = "bola";
});

for (var bloco of blocos) {
  bloco.addEventListener("click", function () {
    // if (execução) {
    //     return;
    //   }
    if (this.classList.contains("jogado")) {
      execução = false;
      return;
    } else if (this.classList.contains("jogado2")) {
      execução = false;
      return;
    }
    if (tipo === "") {
      execução = false;
      return;
    }
    execução = true;
    let jogadas = document.querySelectorAll(".jogado");
    let arrJogadas = Array.from(jogadas);
    if (arrJogadas.length === 4) {
      location.reload();
    }
    let matriz = [
      ["div1", "div2", "div3"],
      ["div1", "div4", "div7"],
      ["div1", "div5", "div9"],
      ["div3", "div5", "div7"],
      ["div2", "div5", "div8"],
      ["div3", "div6", "div9"],
      ["div4", "div5", "div6"],
      ["div7", "div8", "div9"],
    ];
    for (let i = 0; i < matriz.length; i++) {
      const divs = matriz[i];
      var resultado = true;
      for (let i2 = 0; i2 < divs.length; i2++) {
        const divsId = document.getElementById(divs[i2]);
        if (!divsId.classList.contains("jogado")) {
          resultado = false;
          break;
        }
      }
      if (resultado) {
        if (tipo === "xis") {
          const placarx = document.getElementById("placarx");
          let valorAtual = parseInt(placarx.textContent);
          placarx.textContent = valorAtual + 1;
          localStorage.setItem("placarx", valorAtual + 1);
        } else if (tipo === "bola") {
          const boardBola = document.getElementById("boardBola");
          let valorAtualBall = parseInt(boardBola.textContent);
          boardBola.textContent = valorAtualBall + 1;
          localStorage.setItem("boardBola", valorAtualBall + 1);
        }
        location.reload();
        return;
      }
    }
    if (tipo === "xis") {
      let img = document.createElement("img");
      img.src = "../imagens/Xis.png";
      this.appendChild(img);
      this.classList.add("jogado");
      img.style.display = "flex";
      img.style.margin = "auto";
      img.style.alignItems = "center";
      img.style.justifyContent = "center";
    } else if (tipo === "bola") {
      let img = document.createElement("img");
      img.src = "../imagens/Circle.png";
      this.appendChild(img);
      this.classList.add("jogado");
      img.style.display = "flex";
      img.style.margin = "auto";
      img.style.alignItems = "center";
      img.style.justifyContent = "center";
    }
    site();
  });
}

function site() {
  let jogadas2 = document.querySelectorAll(".jogado2");
  if (jogadas2.length > 3) {
    return;
  }
  let arrQuadros = Array.from(blocos);
  let quadroAleatorio =
    arrQuadros[Math.floor(Math.random() * arrQuadros.length)];
  while (
    quadroAleatorio.classList.contains("jogado") ||
    quadroAleatorio.classList.contains("jogado2")
  ) {
    quadroAleatorio = arrQuadros[Math.floor(Math.random() * arrQuadros.length)];
  }
  let matriz2 = [
    ["div1", "div2", "div3"],
    ["div1", "div4", "div7"],
    ["div1", "div5", "div9"],
    ["div3", "div5", "div7"],
    ["div2", "div5", "div8"],
    ["div3", "div6", "div9"],
    ["div4", "div5", "div6"],
    ["div7", "div8", "div9"],
  ];
  for (let ind = 0; ind < matriz2.length; ind++) {
    let linhas = matriz2[ind];
    let result = true;
    for (let indi = 0; indi < linhas.length; indi++) {
      let combinaçoes = document.getElementById(linhas[indi]);
      if (!combinaçoes.classList.contains("jogado2")) {
        result = false;
        break;
      }
    }
    if (result) {
      if (tipo !== "xis") {
        const placarx = document.getElementById("placarx");
        let valorAtual = parseInt(placarx.textContent);
        placarx.textContent = valorAtual + 1;
        localStorage.setItem("placarx", valorAtual + 1);
      } else {
        const boardBola = document.getElementById("boardBola");
        let valorAtualBall = parseInt(boardBola.textContent);
        boardBola.textContent = valorAtualBall + 1;
        localStorage.setItem("boardBola", valorAtualBall + 1);
      }
      location.reload();
      return;
    }
  }
  if (tipo !== "bola") {
    let img = document.createElement("img");
    img.src = "../imagens/Circle.png";
    quadroAleatorio.appendChild(img);
    quadroAleatorio.classList.add("jogado2");
    img.style.display = "flex";
    img.style.margin = "auto";
    img.style.alignItems = "center";
    img.style.justifyContent = "center";
  } else {
    let img = document.createElement("img");
    img.src = "../imagens/Xis.png";
    quadroAleatorio.appendChild(img);
    quadroAleatorio.classList.add("jogado2");
    img.style.display = "flex";
    img.style.margin = "auto";
    img.style.alignItems = "center";
    img.style.justifyContent = "center";
  }
}
