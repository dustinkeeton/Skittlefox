// AUTHOR: Dustin Keeton
$(document).ready(function() {
	
	// Expand/collapse menu depending on button clicked and current state
	$('li img').click(function() {
		var slideString = '.menuLeft#'+ $(this).attr('id');
		$(slideString).siblings().each().css('display', 'none');
		// $('#menuRight').position({
		// 	my: "left center",
		// 	at: "right right",
		// 	of: $(slideString)
		// });
		$(slideString).toggle({
			effect: 'slide',
			easing: 'easeOutBounce',
			duration: 1500
		});
		// $('#menuContainer').animate({
		// 	effect: 'slide',
		// 	easing: 'easeOutBounce',
		// 	duration: 1500
		// });
		// $(slideString).animate({width: 'toggle'}, {easing: easeOutBounce});
	});
});
