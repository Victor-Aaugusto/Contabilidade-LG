const btnPerguntasFAQ = document.querySelectorAll(".btn__perguntas__FAQ");
const textoRespostasFAQ = document.querySelectorAll(".text__FAQ");
const btnMenuHamburger = document.querySelector(".container__menu");
const imagemMenuHamburger = document.querySelector(".lista__menu");

btnPerguntasFAQ.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    textoRespostasFAQ.forEach((text) => {
      text.classList.remove("active");
    });
    textoRespostasFAQ[index].classList.toggle("active");
  });
});

btnMenuHamburger.addEventListener("click", () => {
  imagemMenuHamburger.classList.toggle("lista__menu-ativa");
});
