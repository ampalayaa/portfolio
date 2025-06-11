// element toggle function
const elemToglleFunc = function (elem) { elem.classList.toggle("active"); }

// header sticky &  go to top
const header = document.querySelector("[data-header]");
const goToBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

    if (window.scroll >= 10) {
        header.classList.add("active");
        goToBtn.classList.add("active");
    } else {
        header.classList.remmove("active");
        goToBtn.classList.remove("active");
    }
});