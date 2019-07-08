$(function(){
	//1. 滚动菜单
	    $(window).scroll(function(){
			var top = $(window).scrollTop(); // 滚动条垂直坐标 
			//console.log(top);
			if(top>300){
				$('.navbar').addClass('stick');
			}else{
				$('.navbar').removeClass('stick');
			}
		})
	    
	// 2. 商品加和减
	$('.calc').click(function(){
		//a.获得旧商品的值
		var oldVal = parseInt($(this).parent().find('.countInput').val());
		var newVal;
		// b 判断是加还是减
		if($(this).hasClass('plus-btn')){
			//加
			newVal = oldVal + 1;
		}else{
			//减
			if(oldVal>1){
				newVal = oldVal -1;
			}else{
				newVal = 1;
			}
		}	
		// c.将新值添加到文本框中
		$(this).parent().find('.countInput').val(newVal);
	});
	
//	$(".product-name").click(function(){
//////		$(this).addClass('active').siblings().removeClass('active');
//////		var index = $(this).index();
////		alert(111);
//////		$(this).eq(index).addClass("ch").siblings().removeClass("ch");
//	})
	isLogin();
	function isLogin(){
		//  是否登录的判断
		// 获得本地存储的用户信息
		var user = JSON.parse(localStorage.getItem('user')) || [];
		if(user.length!=0){
			// 登录显示信息 您好,...
			var str =`
			   <div>
		    		<span>您好,${user.user}</span>
		    		<span class="logout"><i class="iconfont icon-tuichu1"></i></span>
		    	</div>
			`;
			
		}else{
			// 显示登录按钮
			var str =`<a href="login.html">登录</a>`;
		}
		$('.mylogin').html(str);
	}
	$('.logout').click(function(){
		// 退出登录 ， 将本地存储的信息删除掉
		localStorage.removeItem('user');
		isLogin();
		//location.reload();
	})
	$("nav-tabs li").click(function(){
		this.css("color","#D43F3A").css("backgroundColor","wight");
	})
	$('.content div').first().show().siblings().hide();
	$('.title li').click(function(){
		   
 			// 1. 鼠标滑过当前标题，给当前标题添加 active,其他去掉active
 			$(this).addClass('active').siblings().removeClass('active');
 			$(this).addClass('act').siblings().removeClass('act');
 			
 			//2. 根据当前标题的索引说更改 content 中内容
 			var index = $(this).index();
 			$('.content div').eq(index).show().siblings().hide();
 		})
})