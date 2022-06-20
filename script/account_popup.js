// Модальное окно

// открыть
$('.js-button-campaign').click(function() { 
	
	$('.js-overlay-campaign').fadeIn();
	$('.js-overlay-campaign').addClass('disabled');
});

// закрыть
$('.js-close-campaign').click(function() { 
	$('.js-overlay-campaign').fadeOut();
	
});


