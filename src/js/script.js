$(document).ready(function() {
	$('.nav__burger').on('click', function () {
		var nav = $('.nav__list');

		nav.show('slow');
	});
});