$(function(){
//通过勾选切换支付按钮状态
$('.gouxuan').click(function(){
	var a= $('.gouxuan').is(':checked');
	if(a){
		$('.payimmediate').addClass('changedisabled');
	}else{
		$('.payimmediate').removeClass('changedisabled');
	}
})


//只能选择一种支付方式的限定
$('.gouxuan').bind('click', function(){  
	  if(this.checked){
	  	  $('.gouxuan').not(this).attr("checked", false); 
	  }
})

var orderList = JSON.parse(window.localStorage.getItem("orderList")) || [];

})