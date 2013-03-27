// AUTHOR: Dustin Keeton
$(document).ready(function() {
	
	// set colorbox.js settings
	// $.colorbox.settings.height= "100%";
	// $.colorbox.settings.maxHeight=850;
	// $.colorbox.settings.maxWidth=1200;

	// Expand/collapse menu 
	$('#logo').click(function() {
		
		// expand/collapse clicked menu

		if (parseInt($('#menuContainer').css('left'),10) == -700) {
			$('#menuContainer').animate({left: -100}, {duration: 1000, easing: 'easeOutBack'});
		}
		else {
			$('#menuContainer').animate({left: -700}, {duration: 1000, easing: 'easeOutBack'});
		}
	});


	// gallery lightbox
	$('.gallery').click(function() {
		$('.gallery').colorbox({
			opacity: 0.8,
			rel: 'gallery'
		});
	});
});
