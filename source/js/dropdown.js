const linkNav = document.querySelector(`.navigation__link--js`)
const dropdown = document.querySelector(`.navigation__list-works`)
const linksWorks = document.querySelectorAll(`.navigation__link--works`)

const linkClickHandler = (event) => {
	event.preventDefault()
	linkNav.classList.toggle(`js-active`)
	dropdown.classList.toggle(`js-active`)
}

const linksClickHandler = () => {
	linkNav.classList.toggle(`js-active`)
	dropdown.classList.toggle(`js-active`)
}

const closeDropdown = () => {
	linksWorks.forEach((link) => {
		link.addEventListener(`click`, linksClickHandler)
	})
}

const initDropdown = () => {
	linkNav.addEventListener(`click`, linkClickHandler)
	closeDropdown()
}

export { initDropdown }
