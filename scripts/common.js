// 二级页面左边菜单的js

$(document).ready(function(){
	$('.nav_menu li').bind('click', function(event) {
		$('.nav_menu li').removeClass();
		$(this).addClass('navhover');
			$('.incontent').css('display','none');
			var num=$(this).index();
			$('.incontent').eq(num).css('display','inline-block');
			return false;
	});
	$('.show-picture').click(function(event) {
		var newImg = {
			width: '756px',
			height: '430px',
			top: '20%',
			left: '22%',
			margin: 'auto'
		}
		var $div = $('<div class="filled"></div>');
		var $img = $(this).closest('.show-picture').find('.main-picture').clone();
		$div.appendTo('body');
		$img.removeClass().addClass('imgSize').appendTo('.filled').animate(newImg, 'slow');
		return false;
	});
	if ($('.filled')) {
		$(this).click(function() {
		 $('.filled').remove();
		});
	}
	$('.amplification').bind('mouseover mouseout', function(event) {
		if (event.type == 'mouseover') {
			$(this).attr({src: 'images/amplification_hover.png'});
		} else {
			$(this).attr({src: 'images/amplification.png'});
		}
		
	})
});
