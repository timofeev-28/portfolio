/* eslint-disable no-console */
const gamesBtns = document.querySelectorAll(`.games__btn`)
const gamesContents = document.querySelectorAll(`.games__content`)

// для проверки наличия элементов на странице
const gamesBtn = document.querySelector(`.games__btn`)
const gamesContent = document.querySelector(`.games__content`)

const buttonClickHendler = (event) => {
	event.preventDefault()

	const path = event.target.dataset.path
	const btnTarget = event.target
	const contentTarget = document.querySelector(`[data-target='${path}']`)

	gamesBtns.forEach((button) => button.classList.remove(`games__btn--active`))
	btnTarget.classList.add(`games__btn--active`)

	gamesContents.forEach((content) => content.classList.remove(`games__content--active`))
	contentTarget.classList.add(`games__content--active`)
}

const initTabs = () => {
	if (document.body.contains(gamesBtn) && document.body.contains(gamesContent)) {
		gamesBtns.forEach((button) => button.addEventListener(`click`, buttonClickHendler))
	}
}

export { initTabs }
