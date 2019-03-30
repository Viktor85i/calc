(function($) {
	$(document).ready(function() {

        $(".js-range-slider").ionRangeSlider({
            grid: true,
            skin: "round",
            min: 5,
            max: 95,
            from: 25,
            step: 1,
            /*max_postfix: "",*/
            prefix: "%",
        });
	
	});
}) (jQuery);