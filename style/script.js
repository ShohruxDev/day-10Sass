const backToTopButton = document.getElementById("backToTop");
window.onscroll = function () {
    scrollFunction();
};
function scrollFunction() {
    if(
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
    ) {backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }

    
}
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
}
backToTopButton.addEventListener("click", scrollToTop);


const menu = document.querySelector(".menu");
const menuMobile = document.querySelector(".menu-mobile");
const close = document.querySelector(".close");

menu.addEventListener("click", () => {
  menuMobile.classList.add("active");
  document.body.style.overflow = "hidden";
});

close.addEventListener("click", () => {
  menuMobile.classList.remove("active");
  document.body.style.overflowY = "auto";
});