const logo = document.querySelector(".logoRenove");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  // Define um ponto onde a imagem deve parar de diminuir (por exemplo, 200 pixels)
  const stopPoint = 40;

  // Calcula a escala com base na posição de rolagem
  const scale = Math.max(1 - (scrollY / 100), 0.9); // Ajuste conforme necessário

  // Calcula a posição vertical com base na posição de rolagem
  const translateY = Math.min(scrollY / 8, stopPoint);

  // Aplica a transformação de escala e posição vertical à imagem
  logo.style.transform = `scale(${scale}) translateY(-${translateY}px)`;
})


function toggleMenu(){
 const menuMobile = document.getElementById("menuMobile")

 if(menuMobile.className === "menuMobile-active"){
    menuMobile.className = "menuMobile"
 }else{
    menuMobile.className = "menuMobile-active"
 }
}

function toggleOpcoesSolucoes(){
const Opcoes = document.getElementById("opcoesSolucoesMobile")

if(Opcoes.className === "opcoesSolucoesMobile-active"){
    Opcoes.className = "opcoesSolucoesMobile"
 }else{
    Opcoes.className = "opcoesSolucoesMobile-active"
 }
}
function toggleOpcoesSetores(){
   const Opcoes = document.getElementById("opcoesSetoresMobile")
   
   if(Opcoes.className === "opcoesSetoresMobile-active"){
       Opcoes.className = "opcoesSetoresMobile"
    }else{
       Opcoes.className = "opcoesSetoresMobile-active"
    }
   }