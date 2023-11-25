const modalContainer = document.querySelector(`.graph-modal`)

const initModal = () => {
	if (modalContainer) {
		return new window.GraphModal()
	}
}

export { initModal }
