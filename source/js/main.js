let mainNav = document.querySelector(`.main-nav`)
let mainNavToggle = document.querySelector(`.main-nav__toggle`)

mainNav.classList.remove(`main-nav--nojs`)
mainNav.classList.replace(`main-nav--opened`, `main-nav--closed`)

mainNavToggle.addEventListener(`click`, () => {
	mainNav.classList.toggle(`main-nav--closed`)
	mainNav.classList.toggle(`main-nav--opened`)
})
