const blocos = document.querySelectorAll(".blocos");
const xis = document.getElementById("xispng");
const bola = document.getElementById("bolapng");
var execução = false;
var tipo = "";

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
    let jogadas = document.querySelectorAll(".jogado");
    if (jogadas.length > 3) {
      location.reload();
    }
    if (this.classList.contains("jogado")) {
      return;
    } else if (this.classList.contains("jogado2")) {
      return;
    }
    if (tipo === "") {
      return;
    }
    execução = true;
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
