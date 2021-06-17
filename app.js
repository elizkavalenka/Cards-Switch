

function SlidesPlugin(activeSlide = 0) {
	const slides = document.querySelectorAll('.slide');

	slides[activeSlide].classList.add('active');

	slides.forEach(item => {
		item.addEventListener('click', () => {
			clearActiveClasses();
			item.classList.add('active');
			
		});
	});

	function clearActiveClasses() {
		slides.forEach(slide => {
			slide.classList.remove('active');
		});
	}
}

SlidesPlugin(4);