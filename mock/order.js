var orderarr ={"data": [
   {
   	"id":"1001",
	"user": "13811269437",
	"addressId":101,
	"amountY": "2800.00",
	"status": 10,
	"subItemsList": [
		{
		"orderId": "190620BC03Z3MH1",
		"itemId": "1",
		"itemName": "秋款新品A&F卫衣 休闲舒适 工作平日皆可",
		"itemCatName":2,
		"itemImage": "y1.jpg",
		"priceY": "400.00",
		"buyCounts": 2
	   },
	   {
		"orderId": "190620BC03Z3MH2",
		"itemId": "2",
		"itemName": "椅子",
		"itemCatName":3,
		"itemImage": "y2.jpg",
		"priceY": "300.00",
		"buyCounts": 1
	   }
    ]
   },
   {
   	"id":"1002",
	"user": "13811269437",
	"addressId":101,
	"amountY": "2180.00",
	"status": 20,
	"subItemsList": [
		{
		"orderId": "190620BC03Z3MH3",
		"itemId": "1",
		"itemName": "秋款新品A&F卫衣 休闲舒适 工作平日皆可",
		"itemCatName":2,
		"itemImage": "r1.jpg",
		"priceY": "400.00",
		"buyCounts": 2
	   },
	   {
		"orderId": "190620BC03Z3MH4",
		"itemId": "2",
		"itemName": "椅子",
		"itemCatName":3,
		"itemImage": "r2.jpg",
		"priceY": "300.00",
		"buyCounts": 1
	   }
    ]
   },
   {
   	"id":"1003",
	"user": "13411269437",
	"addressId":101,
	"amountY": "3380.00",
	"status": 10,
	"subItemsList": [
		{
		"orderId": "190620BC03Z3MH5",
		"itemId": "1",
		"itemName": "秋款新品A&F卫衣 休闲舒适 工作平日皆可",
		"itemCatName":2,
		"itemImage": "j1.jpg",
		"priceY": "400.00",
		"buyCounts": 2
	   },
	   {
		"orderId": "190620BC03Z3MH6",
		"itemId": "2",
		"itemName": "椅子",
		"itemCatName":3,
		"itemImage": "j5.jpg",
		"priceY": "300.00",
		"buyCounts": 1
	   }
    ]
   },
   {
   	"id":"1004",
	"user": "13811269437",
	"addressId":101,
	"amountY": "2680.00",
	"status": 20,
	"subItemsList": [
		{
		"orderId": "190620BC03Z3MH7",
		"itemId": "1",
		"itemName": "秋款新品A&F卫衣 休闲舒适 工作平日皆可",
		"itemCatName":2,
		"itemImage": "x1.jpg",
		"priceY": "400.00",
		"buyCounts": 2
	   },
	   {
		"orderId": "190620BC03Z3MH8",
		"itemId": "2",
		"itemName": "椅子",
		"itemCatName":3,
		"itemImage": "x5.jpg",
		"priceY": "300.00",
		"buyCounts": 1
	   }
    ]
   },
   {
   	"id":"1005",
	"user": "13811269437",
	"addressId":101,
	"amountY": "1180.00",
	"status": 40,
	"subItemsList": [
		{
		"orderId": "190620BC03Z3MH9",
		"itemId": "1",
		"itemName": "秋款新品A&F卫衣 休闲舒适 工作平日皆可",
		"itemCatName":2,
		"itemImage": "y5.jpg",
		"priceY": "400.00",
		"buyCounts": 2
	   },
	   {
		"orderId": "190620BC03Z3MH10",
		"itemId": "2",
		"itemName": "椅子",
		"itemCatName":3,
		"itemImage": "y6.jpg",
		"priceY": "300.00",
		"buyCounts": 1
	   }
    ]
   },
   {
   	"id":"1006",
	"user": "13811269437",
	"addressId":101,
	"amountY": "2180.00",
	"status": 50,
	"subItemsList": [
		{
		"orderId": "190620BC03Z3MH11",
		"itemId": "1",
		"itemName": "秋款新品A&F卫衣 休闲舒适 工作平日皆可",
		"itemCatName":2,
		"itemImage": "r5.jpg",
		"priceY": "400.00",
		"buyCounts": 2
	   },
	   {
		"orderId": "190620BC03Z3MH12",
		"itemId": "2",
		"itemName": "椅子",
		"itemCatName":3,
		"itemImage": "r6.jpg",
		"priceY": "300.00",
		"buyCounts": 1
	   }
    ]
   },
   {
   	"id":"1007",
	"user": "13811269437",
	"addressId":1,
	"amountY": "6680.00",
	"status": 10,
	"subItemsList": [
		{
		"orderId": "190620BC03Z3MH13",
		"itemId": "4",
		"itemName": "台灯",
		"itemCatName":4,
		"itemImage": "r3.jpg",
		"priceY": "400.00",
		"buyCounts": 1
	   },
	   {
		"orderId": "190620BC03Z3MH14",
		"itemId": "5",
		"itemName": "椅子",
		"itemCatName":3,
		"itemImage": "r4.jpg",
		"priceY": "100.00",
		"buyCounts": 1
	   }
    ]
   }
]
};
//  字符串转对象
function parseQueryStr(queryStr){
    let queryData={};  
    let queryStrList = queryStr.split('&');//去除所有的&连接符
  
    for(var i = 0; i<queryStrList.length;i++ ){
        let itemList = queryStrList[i].split('=');
        queryData[itemList[0]] = decodeURIComponent(itemList[1]);
    } 
    return queryData
}
function itemArr(item){
    let itemList=[];  
    let queryStrList = item.split(',');
  
    for(var i = 0; i<queryStrList.length;i++ ){
        itemList[i] = queryStrList[i].split('|');
       
    } 
    itemList.pop(); //删除掉数组中最后一个值
    return itemList
}
// 随机生成订单号：
function random_No() {
    var random_no = "";
    for (var i = 0; i <7; i++) //j位随机数，用以加在时间戳后面。
    {
        random_no += Math.floor(Math.random() * 10);
    }
    random_no = new Date().getTime() + random_no;
    return random_no;
};



/*模拟查找数据的方式  
   user : 手机号
   orderStatus: 
    0   全部
    10, "待付款"				// 代付款		
	20, "待收货"				// 待收货
	40, "已完成"				// 已完成
	50, "已取消"				// 已取消

*/

/* ajax 调用产品数据*/
var pData =[];
$.ajax({
          url:'mock/productList.json',
          type: "get",
          dataType:'json',
          success:function(res){
          	  pData = res.data;
          }
});
/*模拟生成订单数据的方式*/
// 获得本地存储中的订单信息

if(localStorage.getItem("orderList")){
	orderarr = JSON.parse(window.localStorage.getItem("orderList"));
}else{
	orderarr = orderarr.data;
}

Mock.mock("order/createOrder",'post',function(options){
	items = orderarr;
	console.log(items);
	orderNo = random_No();// 生成的随机订单号
    var datas= parseQueryStr(options.body); //将前端传过来的值转为对象
    //console.log(datas)
    var user = datas.user;
    var itemStr = itemArr(datas.itemStr); // 将购买商品转为数组
    console.log(itemStr);
    var subItemsList =[];
    var id = parseInt(items[items.length-1].id)+1;
//  alert(id);
          	  
              for(var k in pData){
              	 for(var j in itemStr){
              	 	if(itemStr[j][0]== pData[k].id){

					    var item ={
					    	orderId:orderNo,
					    	itemId:pData[k].id,
					    	itemName:pData[k].name,
							itemCatName:pData[k].cate,
							itemImage: pData[k].cover,
							priceY:pData[k].priceDiscountYuan,
							buyCounts: itemStr[j][1]

					    }
					    subItemsList.push(item);
              	 	}
              	 }
              }
  
    //console.log(subItemsList);
    var mydata ={
    	"id":id,
    	"user": user,
		"addressId":datas.addressId,
		"amountY": datas.totalprice,
		"status": 20,
		"subItemsList":subItemsList
    }
    
    items.push(mydata);
    console.log(items);
    localStorage.setItem('orderList',JSON.stringify(items)); //本地存储存订单
    data={
            data:orderNo,
            list:items,
            status:1,
            message:"返回订单号"
    }
    return data
})






Mock.mock("order/query",'post',function(options){
        
        const datas= parseQueryStr(options.body);
        var items = orderarr;
        console.log(items)
        var user = datas.userId;
        // 接收支付状态
        var orderStatus = datas.status;
        console.log(user,orderStatus);
        var item=[];
        if(orderStatus==0){
        	item = items;
        }else{
	        for(var i in items){
	            if(items[i].user==user && items[i].status==orderStatus){//在数组arr里找到这个id
	                item.push(items[i]);    
	            }
	        }
        }
        
        data={
            data:item,
            status:1,
            message:"返回支付信息"

        }
        return data;
   
});

// 删除支付信息
Mock.mock('order/delete','delete',function(options){
	var items = orderarr;
    const datas= parseQueryStr(options.body);
    var id = datas.id;
    var index;
    for(var i in items){
        if(items[i].id==id){//在数组arr里找到这个id
            console.log(i)
            index=i;
            items.splice(index,1)//把这个id对应的对象从数组里删除
        }
    }
    localStorage.setItem('orderList',JSON.stringify(items));
    var data= {
        data:items,
        status:1,
        message:"删除成功！"
    }
    return data;//返回这个数组,也就是返回处理后的假数据
})

// 确认收货
Mock.mock("order/awaitToOk",'post',function(options){
        var items = orderarr;
        var item ={};
        const datas= parseQueryStr(options.body);
        var id = datas.id;
        for(var k in items){
            if(items[k].id==id){
                items[k].status = 40;
            }

        }
        localStorage.setItem('orderList',JSON.stringify(items));
        var res ={}
        res={
            status:1,
            message:'确认收货成功'
        }
        return res;    

})