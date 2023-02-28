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
  bloco.addEventListener("click",function() {
    // if (execução) {
    //     return;
    //   }
    if (tipo === "") {
      return;
    }
    execução = true;
    if (tipo === "xis") {
      let img = document.createElement("img");
      img.src = "../imagens/Xis.png";
      this.appendChild(img);
      
      img.style.display = "flex";
      img.style.margin = "auto";
      img.style.alignItems = "center";
      img.style.justifyContent = "center";
    } else if (tipo === "bola") {
      let img = document.createElement("img");
      img.src = "../imagens/Circle.png";
      this.appendChild(img);
      img.style.display = "flex";
      img.style.margin = "auto";
      img.style.alignItems = "center";
      img.style.justifyContent = "center";
    }
    site();
  });
}

function site() {
  const arrQuadros = Array.from(blocos);
  const quadroAleatorio =
    arrQuadros[Math.floor(Math.random() * arrQuadros.length)];
    console.log(quadroAleatorio)
  if (tipo !== "bola") {
    let img = document.createElement("img");
    img.src = "../imagens/Circle.png";
    quadroAleatorio.appendChild(img);
    img.style.display = "flex";
    img.style.margin = "auto";
    img.style.alignItems = "center";
    img.style.justifyContent = "center";
  } else {
    let img = document.createElement("img");
    img.src = "../imagens/Xis.png";
    quadroAleatorio.appendChild(img);
    img.style.display = "flex";
    img.style.margin = "auto";
    img.style.alignItems = "center";
    img.style.justifyContent = "center";
  }
}
