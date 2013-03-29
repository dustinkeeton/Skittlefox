// AUTHOR: Dustin Keeton
$(document).ready(function() {
	
	var extended = false;
	var $links = $('#links');
	// set colorbox.js settings
	// $.colorbox.settings.height= "100%";
	// $.colorbox.settings.maxHeight=850;
	// $.colorbox.settings.maxWidth=1200;

	// Expand/collapse menu 
	$('#logo').click(function() {
		
		// expand/collapse clicked menu

		if (parseInt($('#menuContainer').css('left'),10) == -700) {
			$('#menuContainer').animate({left: -100}, {duration: 1000, easing: 'easeOutBack'});
			$('#about').animate({left: 0}, {duration: 1000, easing: 'easeOutBack'});
			$('#copyright').animate({left: 200}, {duration: 1000, easing: 'easeOutBack'});
			animateLinks();
		}
		else {
			animateLinks();
			$('#menuContainer').animate({left: -700}, {duration: 1000, easing: 'easeInBack'});
			$('#about').animate({left: -999}, {duration: 1000, easing: 'easeInBack'});
			$('#copyright').animate({left: -999}, {duration: 1000, easing: 'easeInBack'});
		}
	});


	// gallery lightbox
	$('.gallery').click(function() {
		$('.gallery').colorbox({
			opacity: 0.8,
			rel: 'gallery'
		});
	});

	function animateLinks(){
		if (!extended) {
			$links.removeClass('invisible');
			$('#wordpress').animate({top: -50}, {duration: 500});
			$('#deviantart').animate({left: 80, top: 10}, {duration: 500});
			$('#twitter').animate({left: 100, top: 50}, {duration: 500});
			$('#cghub').animate({left: 45, top: -20}, {duration: 500});
			extended = true;
		}
		else {
			$('#wordpress').animate({top: 0}, {duration: 500});
			$('#deviantart').animate({left: 0, top: 0}, {duration: 500});
			$('#twitter').animate({left: 0, top: 0}, {duration: 500});
			$('#cghub').animate({left: 0, top: 0}, {duration: 500});
			extended = false;
		}
	} 


});
