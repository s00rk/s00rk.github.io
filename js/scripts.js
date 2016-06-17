var callback = function(){
	$('.item-skills').each(function(){
		newWidth = $(this).parent().width() * $(this).data('percent');
		$(this).width(0);
		if(newWidth < 180)
		{
			newWidth = '80%';
		}
	    $(this).animate({
	        width: newWidth,
	    }, 1000);
	});
	$('.icons-red').each(function(){
		height = $(this).height();
	    $(this).animate({
	        height: 14,
	    }, 2000);
	});
	$("html").niceScroll();
};
$(document).ready(callback);

var resize;
window.onresize = function() {
	clearTimeout(resize);
	resize = setTimeout(function(){
		callback();
	}, 100);
};