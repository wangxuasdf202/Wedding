$(function(){
	$(window).scroll(function(){
		var top=$(window).scrollTop();
		if(top>400){
			$('.navbar').addClass('navbarjs');
			$('.totop').css("display","block");
			$('.contact-infor').css('opacity','1');
		}else{
			$('.navbar').removeClass('navbarjs');
			$('.totop').css("display","none");
		}
	})
	//标题栏菜单的显示与隐藏
//	$('.dropdown').mouseover(function(){
//		$(this).addClass('open');
//	})
//	$('.dropdown').mouseout(function(){
//		$(this).removeClass('open');
//	})
//	
	//CLOTHING第一部分遮罩层
	$(".fashion-store").mouseenter(function(){
		$(this).children().children('.overlay').css("display","block");
	})
	$(".fashion-store").mouseleave(function(){
		$(this).children().children('.overlay').css("display","none");
	})
	
	
	//CLOTHING第二部分遮罩层
	$(".index-box-img2").mouseenter(function(){
		$(this).children('.index-box-bg').css("display","block");
	})
	$(".index-box-img2").mouseleave(function(){
		$(this).children('.index-box-bg').css("display","none");
	})
	
	$(".index-box-img1").mouseenter(function(){
		$(this).siblings().children('.index-box-bg').css("display","block");
	})
	$(".index-box-img1").mouseleave(function(){
		$(this).siblings().children('.index-box-bg').css("display","none");
	})
	
	
	//联系客服的显示与隐藏
	$('.kefu').mouseover(function(){
		$('.contact-infor').css('display','block');
	})
	$('.kefu').mouseout(function(){
		$('.contact-infor').css('display','none');
	})
	
	$('.totop').click(function(){
		$('html,body').animate({
			scrollTop:0
		},500);
	})
	
	//轮播
	$("#pic_list_1").cxScroll();
	//轮播图上停留效果

$('.box .list li').mouseenter(function(){
	$('.list .listactive').css('display','block');
	$(this).append($('.listactive'));
})

$('.box .list').mouseleave(function(){
	$('.list .listactive').css('display','none');
	
})
//$('.box .list li').click(function(){
//	$(this).css('')
//})


})

