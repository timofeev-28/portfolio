const slider = document.querySelector(`.cert__swiper`)

const setSlider = () => {
	new window.Swiper(slider, {
		slidesPerView: 2,
		spaceBetween: 10,
		slidesPerGroup: 2,
		swipe: true,
		speed: 800,

		breakpoints: {
			540: {
				slidesPerView: 3,
				spaceBetween: 15,
				slidesPerGroup: 3,
			},
		},

		scrollbar: {
			el: `.swiper-scrollbar`,
			draggable: true,
		},

		navigation: {
			nextEl: `.swiper-button-next`,
			prevEl: `.swiper-button-prev`,
		},
	})
}

const initSlider = () => {
	if (slider) {
		setSlider()
	}
}

export { initSlider }
