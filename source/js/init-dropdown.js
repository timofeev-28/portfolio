const linkNav = document.querySelector(`.navigation__link--js`)
const dropdown = document.querySelector(`.navigation__list-works`)
const linksWorks = document.querySelectorAll(`.navigation__link--works`)

const documentClickHendler = (event) => {
	if (!event.target.closest(`.is-active`)) {
		linkNav.classList.remove(`is-active`)
		dropdown.classList.remove(`is-active`)
	}
}

const linkClickHandler = (event) => {
	event.preventDefault()
	linkNav.classList.toggle(`is-active`)
	dropdown.classList.toggle(`is-active`)

	if (linkNav.closest(`.is-active`)) {
		document.addEventListener(`click`, documentClickHendler)
	} else {
		document.removeEventListener(`click`, documentClickHendler)
	}
}

const linksClickHandler = () => {
	linkNav.classList.toggle(`is-active`)
	dropdown.classList.toggle(`is-active`)
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
