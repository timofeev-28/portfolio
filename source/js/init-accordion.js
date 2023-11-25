const accordion = document.querySelector(`.accordion`)

const openAccordion = () => {
	new window.Accordion(accordion, {
		duration: 500,
		showMultiple: true,
	})
}

const initAccordion = () => {
	if (accordion) {
		openAccordion()
	}
}

export { initAccordion }
