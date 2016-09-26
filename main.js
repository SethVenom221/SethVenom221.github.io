$(document).ready(function() {
	$(".open-icon").click(function() {
		$(".menu").animate({
			left: '0px'
		}, 200);

		$("body").animate({
			left: '285px'
		}, 200);
	});

	$(".close-icon").click(function() {
		$(".menu").animate({
			left: '-285px'
		},200);

		$("body").animate({
			left: '0px'
		},200);
	});
});
