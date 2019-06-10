/*
 
 * 17素材vip建站专区模块代码
 * 详尽信息请看官网：http://www.17sucai.com/pins/vip
 *
 * Copyright , 温州易站网络科技有限公司版权所有
 * 图片不能商用，代码可商用。
 
 * 请尊重原创，未经允许请勿转载。
 * 在保留版权的前提下可应用于个人或商业用途
 
*/


$(function() {
	//优势跳动数字
	function numAdd(el) { 
		var lastNum = el.data("num");
		el.text(0);
		var i = 0;
		var timer = setInterval(function() {
			if(i > 56) {
				el.text(i += 50);
			} else {
				el.text(i += 6);
			}
			if(i >= lastNum) {
				clearInterval(timer);
				el.text(lastNum);
				if(lastNum == 28 || lastNum == 56 || lastNum == 800 || lastNum == 5000) {
					el.text(lastNum + "+");
				}
			};
		}, 60)
	}

	$(".priorities").waypoint(function(direction) {
		if(direction == "down") {
			numAdd($(".num").eq(0));
			numAdd($(".num").eq(1));
			numAdd($(".num").eq(2));
			numAdd($(".num").eq(3));
			numAdd($(".num").eq(4));
		}

	}, {
		offset: "64%"
	});	
	//二级导航
	jQuery(".nav").slide({
		type: "menu",
		titCell: ".m",
		targetCell: ".sub",
		effect: "slideDown",
		delayTime: 300,
		triggerTime: 100,
		returnDefault: true
	});
	// 出场动画
	var anim = $(".anim");
	setTimeout(function() { //规避页面加载不完整高度获取异常
		$(window).scroll(function() {
			roll();
		})
		$(window).resize(function() {
			roll();
		})
		roll();
	}, 6)
	//滚动执行动画
	function roll() {
		var oHeight = $(window).height();
		var ScrVal = $(window).scrollTop();
		anim.each(function(i) {
			if(ScrVal + oHeight > anim.eq(i).offset().top + 100) {
				anim.eq(i).addClass("anim-show");
			}
		})
	}
	//滚动到一定位置添加CLASS
	$(window).scroll(function() {
		var h = $(document).scrollTop();
		var j = window.screen.height;
		var o = $(".fuSlide").offset().top;
		if(h > o - 100) {
			$('.digital').addClass('active');
		} else {

			$('.digital').removeClass('active');
		}
	});
	//上下滚动导航吸顶效果
	$(window).scroll(function() {
		if($(window).scrollTop() < 100) {
			$('.sidetop').hide();
		} else {
			$('.sidetop').show();
		}
		//控制导航
		if($(window).scrollTop() < 100) {
			$('#headdiv').stop().animate({
				"top": "0px"
			}, 100);
			$('.logo').css("padding-top", "13px");
			$('.nav .mmm').css("padding-top", "40px");
			$('.nav .m').css("background-position", "right 46px");
			$('.nav .sub').css("top", "124px");
			$('.top02').css("height", "86px");
			$("#top_bgs").css("height", "0")

		} else {
			$('#headdiv').stop().animate({
				"top": "-42px"
			}, 100);
			$('.top02').css("height", "75px");
			$('.logo').css("padding-top", "7px");
			$('.nav .mmm').css("padding-top", "30px");
			$('.nav .m').css("background-position", "right 35px");
			$('.nav .sub').css("top", "67px");
			$("#top_bgs").css("height", "7px")

		}
	});
	//轮播
	$('.ck-slide').ckSlide({
		autoPlay: true
	});
	//轮播图滑轮图标点击向下
	$(".sub-mouse").find("img").click(function() {
		var minheight = $(".i_one").offset().top - 75;
		$('html,body').animate({
			scrollTop: minheight
		}, 500)
	});

});