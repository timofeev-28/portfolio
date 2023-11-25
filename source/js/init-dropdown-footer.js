const footer = document.querySelector(`.footer`)
const linkNav = footer.querySelector(`.navigation__link--js`)
const dropdown = footer.querySelector(`.navigation__list-works`)
const linksWorks = footer.querySelectorAll(`.navigation__link--works`)

const documentClickHendler = (event) => {
	if (!event.target.closest(`.js-active`)) {
		linkNav.classList.remove(`js-active`)
		dropdown.classList.remove(`js-active`)
	}
}

const linkClickHandler = (event) => {
	event.preventDefault()
	linkNav.classList.toggle(`js-active`)
	dropdown.classList.toggle(`js-active`)

	if (linkNav.closest(`.js-active`)) {
		document.addEventListener(`click`, documentClickHendler)
	} else {
		document.removeEventListener(`click`, documentClickHendler)
	}
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

const initDropdownFooter = () => {
	linkNav.addEventListener(`click`, linkClickHandler)
	closeDropdown()
}

export { initDropdownFooter }
