head.ready(function() {

	$('.js-town').on('click', function() {
		$('.js-town-open').slideToggle();
		$('.js_popup').addClass('is_active')
		return false;
	});
	// popup
	$('.js_popup').on('click', function() {
		$(this).removeClass('is_active');
		$('.js-town-open').slideUp('300');
	});
});