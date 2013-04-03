// AUTHOR: Dustin Keeton
$(document).ready(function() {
	
	var $links = $('#links');
	$links.addClass('invisible');

	// set colorbox.js settings and resize 
	$.colorbox.settings.maxHeight="99%";
	$.colorbox.settings.maxWidth="100%";
	$(document).on('cbox_complete', function(){
		var fontSize = 16;
		var titleMax = $('#colorbox').width() * .80;
  		$("#cboxTitle").css("font-size", "16px"); 
  		while($('#cboxTitle').width() > titleMax){
  			fontSize-=1;
    		$("#cboxTitle").css("font-size", fontSize);
  		}
	});

	// Expand/collapse menu 
	$('#logo').click(function() {	
		// expand/collapse clicked menu
		animateStuff();
	});

	// gallery lightbox
	$('.gallery').click(function() {
		$('.gallery').colorbox({
			opacity: 0.8,
			rel: 'gallery'
		});
	});

	// animate stuff
	function animateStuff(){
		if (parseInt($('#menuContainer').css('left'),10) == -600) {
			//Menu pieces
			$('#menuContainer').animate({left: 0}, {duration: 1000, easing: 'easeOutBack'});
			$('#about').animate({left: 0}, {duration: 1000, easing: 'easeOutBack'});
			//links
			$links.removeClass('invisible');
			$('#wordpress').animate({top: -55, left: -15}, {duration: 500});
			$('#cghub').animate({top: -40, left: 26}, {duration: 500, complete: function(){
				$links.css('z-index', '+1');
			}});
			$('#tumblr').animate({top: -15, left: 65}, {duration: 500});
			$('#deviantart').animate({top: 20, left: 95}, {duration: 500});
			$('#twitter').animate({top: 64, left: 105}, {duration: 500});
				
		}
		else {
			//Menu pieces
			$('#menuContainer').animate({left: -600}, {duration: 1000, easing: 'easeInBack'});
			$('#about').animate({left: -999}, {duration: 1000, easing: 'easeInBack'});
			//links
			$links.css('z-index', '-1');
			$('#wordpress').animate({top: 0, top: 0}, {duration: 500});
			$('#cghub').animate({left: 0, top: 0}, {duration: 500, complete: function(){
				$links.addClass('invisible');
			}});	
			$('#tumblr').animate({left: 0, top: 0}, {duration: 500});
			$('#deviantart').animate({left: 0, top: 0}, {duration: 500});
			$('#twitter').animate({left: 0, top: 0}, {duration: 500});
		}
	} 


});
