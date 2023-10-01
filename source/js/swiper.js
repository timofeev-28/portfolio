const slider = document.querySelector(`.cert__swiper`)

// eslint-disable-next-line no-undef, no-unused-vars
let mySwiper = new Swiper(slider, {
	slidesPerView: 2,
	spaceBetween: 10,
	slidesPerGroup: 2,

	breakpoints: {
		768: {
			slidesPerView: 3,
			spaceBetween: 15,
			slidesPerGroup: 3,
		},
	},

	scrollbar: {
		el: `.swiper-scrollbar`,
		draggable: true,
	},

	// pagination: {
	// 	el: `.swiper-pagination`,
	// 	type: `fraction`,
	// },

	navigation: {
		nextEl: `.swiper-button-next`,
		prevEl: `.swiper-button-prev`,
	},
})
