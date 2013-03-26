// AUTHOR: Dustin Keeton
$(document).ready(function() {
	
	// set colorbox.js settings
	// $.colorbox.settings.height= "100%";
	// $.colorbox.settings.maxHeight=850;
	// $.colorbox.settings.maxWidth=1200;

	// Expand/collapse menu depending on button clicked and current state
	$('li img').click(function() {

		// target menuLeft pane
		var slideString = '#menuLeft .'+ $(this).attr('class');
		
		// expand/collapse clicked menu

		if (parseInt($('#menuContainer').css('left'),10) == -700) {
			$(slideString).siblings().addClass('invisible');
			$(slideString).removeClass('invisible');
			$('#menuContainer').animate({left: -100}, {duration: 1000, easing: 'easeOutBack'});
			// $('#menuContainer').transition({left: -100, duration: 1000, easing: 'easeOutBack'});
		}
		else {
			// $('#menuContainer').transition({left: -700, duration: 1000, easing: 'easeOutBack', complete: function(){	
			$('#menuContainer').animate({left: -700}, {duration: 1000, easing: 'easeOutBack', complete: function(){
				var alreadyExpanded = !$(slideString).hasClass('invisible');
				$(slideString).siblings().addClass('invisible');
				$(slideString).removeClass('invisible');
				if (!alreadyExpanded){
					// $('#menuContainer').transition({left: -100, duration: 1000, easing: 'easeOutBack'});
					$('#menuContainer').animate({left: -100}, {duration: 1000, easing: 'easeOutBack'});
				}
			}});
		}
	});

	$('.thumbs a').click(function() {
		

		if ($(this).hasClass('galleryillu')) {
			$('.galleryillu').colorbox({
					opacity: 0.8,
					rel: 'galleryillu'
			});
		}
		else if ($(this).hasClass('gallerysketch')) {
			$('.gallerysketch').colorbox({
					opacity: 0.8,
					rel: 'gallerysketch'
			});
		}
		else {
			$('.galleryfan').colorbox({
					opacity: 0.8,
					rel: 'galleryfan'
			});
		}

	});
});
