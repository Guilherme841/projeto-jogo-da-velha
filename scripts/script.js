const blocos = document.querySelectorAll(".blocos");
const xis = document.getElementById("xispng");
const bola = document.getElementById("bolapng");
const resetar = document.getElementById("reset");

var execução = false;
var tipo = "";

let pointx = localStorage.getItem("placarx");
if (!isNaN(pointx)) {
  placarx.textContent = parseFloat(pointx);
}

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
    resetar.addEventListener("click", function () {
      location.reload();
    });
    function verificaResu() {
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
        let divs = matriz[i];
        let resultado = true;
        for (let i = 0; i < divs.length; i++) {
          let divsId = document.getElementById(divs[i]);
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
    verificaResu();
  });
}

function site() {
  function verificaResu2() {
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
    for (let i = 0; i < matriz2.length; i++) {
      let linhas = matriz2[i];
      let result = true;
      for (let i = 0; i < linhas.length; i++) {
        let combinaçoes = document.getElementById(linhas[i]);
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
  }
  setInterval(() => {
    verificaResu2();
  }, 1000);
  let matriz3 = [
    ["div1", "div2", "div3"],
    ["div1", "div4", "div7"],
    ["div1", "div5", "div9"],
    ["div3", "div5", "div7"],
    ["div2", "div5", "div8"],
    ["div3", "div6", "div9"],
    ["div4", "div5", "div6"],
    ["div7", "div8", "div9"],
  ];
  for (let i = 0; i < matriz3.length; i++) {
    let eDivs = matriz3[i];
    var jogado = false;
    for (let i = 0; i < eDivs.length; i++) {
      let eDivsIds2 = document.getElementById(eDivs[i]);
      if (eDivsIds2.classList.contains("jogado")) {
        jogado = true;
        break;
      }
      if (
        !eDivsIds2.classList.contains("jogado") &&
        !eDivsIds2.classList.contains("jogado2")
      ) {
        if (tipo !== "bola") {
          let img = document.createElement("img");
          img.src = "../imagens/Circle.png";
          eDivsIds2.appendChild(img);
          eDivsIds2.classList.add("jogado2");
          img.style.display = "flex";
          img.style.margin = "auto";
          img.style.alignItems = "center";
          img.style.justifyContent = "center";
        } else {
          let img = document.createElement("img");
          img.src = "../imagens/Xis.png";
          eDivsIds2.appendChild(img);
          eDivsIds2.classList.add("jogado2");
          img.style.display = "flex";
          img.style.margin = "auto";
          img.style.alignItems = "center";
          img.style.justifyContent = "center";
        }
        return;
      }
    }
  }
}
