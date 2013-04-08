// AUTHOR: Dustin Keeton
$(document).ready(function() {
	var $windowWidth = $(window).width();
	// alert($windowWidth);
	var $left = '-58.59375%';
	var $linkBlock = $('#links');
	var $links = $('#links a');
	
	//hide the links
	$linkBlock.addClass('invisible');

	// set colorbox.js settings and resize 
	$.colorbox.settings.maxHeight="99%";
	$.colorbox.settings.maxWidth="100%";

	// font resizing
	$(document).on('cbox_complete', function(){
		var fontSize = 16;
		var titleMax = $('#colorbox').width() * .80;
  		$("#cboxTitle").css("font-size", "16px"); 
  		while($('#cboxTitle').width() > titleMax){
  			fontSize-=1;
    		$("#cboxTitle").css("font-size", fontSize);
  		}
	});

	//orientation change
	$(window).bind('orientationchange', function(){
		alert($windowWidth);
		switch (window.orientation) {
			//portrait
			case 0:
				$windowWidth = 320;
			break;

			//landscape left
			case 90:
				$windowWidth = 480;
				alert('left');
			break;
			//landscape right
			case -90:
				$windowWidth = 480;
				alert('right');
			break;
		}
		$(window).scrollTop(0);
		$(window).scrollLeft(0);
		animateStuff();
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
		//checking to see if menu is already expanded
		if (parseInt($('#menuContainer').css('left')) < 0) {
			expand();
		}
		else {
			collapse();
		}
	} 

	function expand(){
		//menu is not expaned - next check for iphone screen
		if($windowWidth < 500){
			//Menu pieces
			$('#menuContainer').animate({left: '0%'}, {duration: 1000, easing: 'easeOutBack'});
			$('#info').animate({left: 0}, {duration: 1000, easing: 'easeOutBack'});
			//links
			$linkBlock.removeClass('invisible');
			$links.animate({left: 55}, {duration: 500, complete: function(){
				$linkBlock.css('z-index', '+1');
				$('#wordpress').animate({top: 0}, {duration: 500});
				$('#cghub').animate({top: 40}, {duration: 500});
				$('#tumblr').animate({top: 80}, {duration: 500});
				$('#deviantart').animate({top: 120}, {duration: 500});
				$('#twitter').animate({top: 160}, {duration: 500});
			}});
		}
		//not iphone - cool animation proceeds!
		else {
			//Menu pieces
			$('#menuContainer').animate({left: '0%'}, {duration: 1000, easing: 'easeOutBack'});
			$('#info').animate({left: 0}, {duration: 1000, easing: 'easeOutBack'});
			//links
			$linkBlock.removeClass('invisible');
			$('#wordpress').animate({top: -50, left: 0}, {duration: 500});
			$('#cghub').animate({top: -30, left: 45}, {duration: 500, complete: function(){
				$linkBlock.css('z-index', '+1');
			}});
			$('#tumblr').animate({top: 2, left: 82}, {duration: 500});
			$('#deviantart').animate({top: 42, left: 100}, {duration: 500});
			$('#twitter').animate({top: 85, left: 110}, {duration: 500});
		}	
	}

	function collapse() {
		//Animates back to starting position based on screen size 
		if($windowWidth >= 1900) {
			$left = '-110%';

		}
		else if ($windowWidth >= 1500) {
			$left = '-80%';
		}
		else if ($windowWidth >= 1000) {
			$left = '-65%';
		}
		else {
			$left = '-58.59375%';
		}
		//links
		$linkBlock.css('z-index', '-1');
		$links.animate({left: 0, top:0}, {duration: 500, complete: function(){
				$linkBlock.addClass('invisible');
		}});
		//Menu pieces
		$('#menuContainer').animate({left: $left}, {duration: 1000, easing: 'easeInBack'});
		$('#info').animate({left: -999}, {duration: 1000, easing: 'easeInBack'});

	}

});
