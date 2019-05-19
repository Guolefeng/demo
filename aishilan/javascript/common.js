(function () {
	'use strict';
	function fixedNavWhenScroll(navBar) {
		const navBarHeight = navBar.height();
		let navBarFixed = false;
		let scrollTimer = null;

		$(window).on('scroll.nav', () => {
			window.clearTimeout(scrollTimer);
			scrollTimer = window.setTimeout(() => {
				const scrollTop = $(window).scrollTop();
				if (scrollTop < navBarHeight) {
					if (navBarFixed) {
						navBar.removeClass('fixed');
						navBarFixed = false;
					}
				} else if (!navBarFixed) {
					navBar.addClass('fixed');
					navBarFixed = true;
				}
			}, 50);
		});
	}
	fixedNavWhenScroll($('.nav'));
	footer.render();

}());
