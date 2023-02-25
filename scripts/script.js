const blocos = document.querySelectorAll(".blocos");
const xis = document.getElementById("xispng");
const bola = document.getElementById("bolapng");
// let execução = false;

xis.addEventListener("click", function () {});

bola.addEventListener("click", function () {});

for (let bloco of blocos) {
  bloco.addEventListener("click", async function () {
    // if (execução) {
    //     return;
    //   }
    //   execução = true;
    let img = document.createElement("img");
    img.src = "../imagens/Xis.png";
    bloco.appendChild(img);
    img.style.display = "flex";
    img.style.margin = "auto";
    img.style.alignItems = "center";
    img.style.justifyContent = "center";
  });
}
