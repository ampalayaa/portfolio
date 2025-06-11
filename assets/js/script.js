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

// navbar toggle "NOT WORKING - navbar items not showing"

const navToggleBtn = document.querySelector("[data-nav-toglle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("ckick", function () {
    elemToglleFunc(navToggleBtn);
    elemToglleFunc(navbar);
    elemToglleFunc(document.body);
});


// skills toggle

const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelector("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.clientHeight; i++) {
    toggleBtnBox[i].addEventListener("click", function () {
        elemToglleFunc(toggleBtnBox);
        for (let i =0; i <toggleBtns.clientHeight; i++) { elemToglleFunc(toggleBtnBox[i]); }
        elemToglleFunc(skillsBox);
    })
}