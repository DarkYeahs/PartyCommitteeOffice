function nexttry() {
			var Left = parseInt($('.picture_show ul').css('margin-left'));								//图片自动播放
			var num = -Left/460 + 1;
			var Value = $('.picture_show ul li img').eq(num).attr('alt');
			var TexT = $('.picture_show ul li img').eq(0).attr('alt');;								
			if(Left == -1840) {																			//当图片播放到最后一张
				$('.picture_show ul').animate({marginLeft: 0},'slow').queue(function(next) {			//时图片滚回第一张
				$('.headline a').css('background-color','#fff');										//并改变显示字幕及
				$('.first').css('background-color','#fccf3d');											//图片显示轮
				$('.left').html(TexT);
				next();
				});
			} 
			if(Left <= -1840 || Left%460 != 0) return false;
			Leftnext = Left - 460;
			$('.picture_show ul').animate({marginLeft: Leftnext+'px'},'slow').queue(function(next) {
				$('.left').html(Value);	
				$('.headline a').css('background-color','#fff');
				$('.right a').eq(num).css('background-color','#fccf3d');
				next();
			});
		}
		var movement = setInterval("nexttry()",3000);

	$(document).ready(function() {
		$('.test a').click(function() {
				var Left = parseInt($('.picture_show ul').css('margin-left'));
				if((Left > 0 || Left < -1840) || Left%460 != 0)  return false;
				clearInterval(movement);
				var ClassName = $(this).attr('class');
				var num;
				var Value;
				if(ClassName == 'next' && Left != -1840) {						//判断图片触发的按钮为上一页还是下一页
					num = -Left/460 + 1;										
					LeftMove = Left - 460;										//判断图片是否为第一张或最后一张图片
				}	else if (ClassName == 'next' && Left == -1840)	{
					num = 0;
					LeftMove = 0;
				}	else if(ClassName == 'before' && Left != 0) { 
					num = -Left/460 - 1;
					LeftMove = Left + 460;
				}	else if (ClassName == 'before' || Left == 0) {
					num = 4;
					LeftMove = -1840
				}
				else return false;
				Value = $('.picture_show ul li img').eq(num).attr('alt');
				$('.picture_show ul').animate({marginLeft: LeftMove+'px'},'slow').queue(function(next) {
					$('.left').html(Value);
					$('.headline a').css('background-color','#fff');
					$('.right a').eq(num).css('background-color','#fccf3d');
					next();
				});
				return false;
		});
		$('.headline a').click(function() {
				clearInterval(movement);
				num= $(this).index();											//获取当前按钮相对于第一个按钮的index值
				$('.headline a').css('background-color','#fff');
				$(this).css('background-color','#fccf3d');
				var numleft = num * 460 * -1;
				var Value = $('.picture_show ul li img').eq(num).attr('alt');
				$('.picture_show ul').animate({marginLeft: numleft},'slow').queue(function(next) {
					$('.left').html(Value);
					next();
				});
			return false;
		});
		$('.picture_show').mouseenter(function() {
			$('.test a').css('display', 'inline-block');
		}).mouseleave(function() {
			$('.test a').css('display', 'none');
		});
		$('.navigation .nav li').mouseenter(function() {
			$('.navigation .nav li').removeClass();
			$(this).addClass('navhover');
			$('.navigation .main_newsList').css('display' , 'none');
			var num = $(this).index();
			$('.navigation .main_newsList').eq(num).css('display' , 'inline-block');
		});
		$('.pretend select').change(function() {
			if(this.value!='#') window.open('http://' + this.value.replace(/http:\/\//gi,''),'_blank');
		});
});