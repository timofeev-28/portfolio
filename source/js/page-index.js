// ACCORDION
// eslint-disable-next-line no-unused-vars
const openAccordion = () => {
	// eslint-disable-next-line no-undef
	new Accordion(`.accordion`, {
		duration: 500,
		showMultiple: true,
	})
}

openAccordion()


// SWIPER
const slider = document.querySelector(`.cert__swiper`)

// eslint-disable-next-line no-undef, no-unused-vars
let mySwiper = new Swiper(slider, {
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


// MODAL
// eslint-disable-next-line no-undef, no-unused-vars
const modal = new GraphModal()
