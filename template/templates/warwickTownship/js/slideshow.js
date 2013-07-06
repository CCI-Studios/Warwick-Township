(function (window) {
	window.addEvent('domready', function () {
		$$('ul.slideshow').each(function(slideshow) {
			var slides = slideshow.getElements('li'),
				currentSlide = slideshow.getElement('.current'),
				delay = 7000,
				duration = 4000;

			setTimeout(function() {
				rotate(slides, currentSlide, delay, duration);
			}, delay);
		});

		var rotate = function(slides, current, delay, duration) {
			var index = slides.indexOf(current),
				next = slides[(index+1) % slides.length];

			current.addClass('other');
			current.removeClass('current');
			current.fade('out');

			next.addClass('current');
			next.removeClass('other');
			next.fade('in');

			setTimeout(function() {
				rotate(slides, next, delay, duration);
			}, delay);
		};
	});
}(this));
