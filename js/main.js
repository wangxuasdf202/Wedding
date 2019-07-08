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
		if($(this).hasClass('inc')){
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
	})
	
	// 返回到顶端
	var back = $('.scrollBack');
	back.on('click', function() {
		//设置滚动条垂直坐标 0
		$('html,body').animate({
			scrollTop: 0
		}, 500);
	})
	$(window).on('scroll', function() {
		//获得滚动条垂直坐标
		var top = $(window).scrollTop();
		if(top > 300) {
			back.fadeIn();
		} else {
			back.fadeOut();
		}
	})
	// 第一次初始判断用户登录
	isLogin();
	function isLogin(){
		//  是否登录的判断
		// 获得本地存储的用户信息
		var user = JSON.parse(localStorage.getItem('user')) || [];
		if(user.length!=0){
			// 登录显示信息 您好,...
			var str =`
			   <div>
		    		<span style="color:#000000">您好,用户${user.user}</span>
		    		<span class="logout"><i class="iconfont icon-tuichu1"></i></span>
		    	</div>
			`;
			
		}else{
			// 显示登录按钮
			var str =`<a href="login.html">立即登录</a>`;
		}
		$('.mylogin').html(str);
	}
	$('.logout').click(function(){
		// 退出登录 ， 将本地存储的信息删除掉
		localStorage.removeItem('user');
		isLogin();
		//location.reload();
	})
	
	
	//搜索 
	        var newArr = [];
			$(".search-btn").click(function() {
				newArr = [];
				var value = $(".searchwedding").val();
				console.log(value);
				$(".searchwedding").val(value);
				$.ajax({
					url: "mock/productList.json",
					type: "get",
					dataType: "json",
					success: function(res) {
						var arr = res.data;
						for(i in arr) {
							var title=arr[i].title;
							if(title.indexOf(value)!= -1) {
								console.log(arr[i]);
								newArr.push(arr[i]);
								
							}
						}
						console.log(newArr);
						location.href="search.html";
						localStorage.setItem('searchR',JSON.stringify(newArr));
					
					}
				})
			})
		   
})


