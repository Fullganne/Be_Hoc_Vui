let swiper = new Swiper(".mySwiper", {
	slidesPerView: 3,
	spaceBetween: 25,
	loop: true,
	centerSlide: 'true',
	fade: 'true',
	grabCursor: 'true',
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		dynamicBullets: true,
		dynamicMainBullets: 3,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	breakpoints:{
		0: {
			slidesPerView: 1,
		},
		600: {
			slidesPerView: 2,
		},
		1100: {
			slidesPerView: 3,
		},
	},
});


