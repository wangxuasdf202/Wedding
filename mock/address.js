var addressarr ={"data": [
	{
	"id": "101",
	"userId":"13811269437",
	"realname":"张三",
	"receiver": "上海公司",
	"mobile": "13811269437",
	"emailcode":"300350",
	"province": 0,
	"city": null,
	"district": null,
	"descAddress": "北京海淀区西三旗",
	"isDefault": 1
	},
	{
	"id": "102",
	"userId":"13411269437",
	"realname":"张四",
	"receiver": "上海公司",
	"mobile": "13411269437",
	"emailcode":"300350",
	"province": 1,
	"city": null,
	"district": null,
	"descAddress": "天津市西青区",
	"isDefault": 0
	},
	{
	"id": "103",
	"userId":"15123456789",
	"realname":"张五",
	"receiver": "上海公司",
	"mobile": "15123456789",
	"emailcode":"000640",
	"province": 2,
	"city": "北京",
	"district": null,
	"descAddress": "上海市浦东区",
	"isDefault": 0
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

if(localStorage.getItem("address")){
	addressarr = JSON.parse(window.localStorage.getItem("address"));
}else{
	addressarr = addressarr.data;
}

//查询所有
Mock.mock("address/query",'post',function(options){
        
        items = addressarr;
        var res ={}
        res={
            data:items,
            status:1,
            message:'查询成功'
        }
        return res;    

});

//查询一条信息
Mock.mock("address/queryOne",'post',function(options){
	    var items = addressarr;
	    var item ={};
        const datas= parseQueryStr(options.body);
        var id = datas.id
        for(var k in items){
        	if(id == items[k].id){
        		item = items[k];
        	}
        }
        var res ={}
        res={
            data:item,
            status:1,
            message:'查询一条信息成功'
        }
        return res;    

});
// 获得数组中最大的 id值 对于的 key下标值
function getMaxVal(items){
	var maxKey = 0;
	var max = items[0].id;
	for(var k in items){
		if(max < items[k].id){
			max = items[k].id;
			maxKey = k;
		}
	}
	return maxKey;
}

// 添加
Mock.mock("address/add",'post',function(options){
	 items = addressarr;
     const datas= parseQueryStr(options.body);
     var addressId = parseInt(items[getMaxVal(items)].id)+1;
     console.log(datas)
     var mydata ={
    	    "id": addressId,
    	    "userId":'13811269437',
    	    "realname":datas.realname,
			"receiver": "上海公司",
			"mobile": datas.phone,
			"emailcode":datas.emailcode,
			"province": datas.country,
			"city": null,
			"district": null,
			"descAddress":datas.descAddress,
			"isDefault": 0
   

    }
      console.log(mydata)
    items.unshift(mydata);
    localStorage.setItem('address',JSON.stringify(items));
    data={
            status:1,
            message:"添加成功"
    }
    return data
})

// 更新
Mock.mock("address/update",'post',function(options){
    items = addressarr;
    var datas= parseQueryStr(options.body);
    var id = datas.id;
     var mydata ={
    	    "id": id,
    	    "userId":'13811269437',
    	    "realname":datas.realname,
			"receiver": "上海公司",
			"mobile": datas.phone,
			"emailcode":datas.emailcode,
			"province": datas.country,
			"city": null,
			"district": null,
			"descAddress":datas.descAddress,
			"isDefault": 0
   

    }
    for(var i in items){
        if(items[i].id==id){//在数组arr里找到这个id
            items[i]=mydata;
        }  
    }
    localStorage.setItem('address',JSON.stringify(items));
    var data={
            data:items,
            status:1,
            message:"修改成功！"
    }
    return data
})


// 删除
Mock.mock('address/delete','delete',function(options){
	var items = addressarr;
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
    localStorage.setItem('address',JSON.stringify(items));
    var data= {
        data:items,
        status:1,
        message:"删除成功！"
    }
    return data;//返回这个数组,也就是返回处理后的假数据
})

// 查询默认地址

Mock.mock("address/addressDefault",'post',function(options){
        var items = addressarr;
        console.log(items);
        var item ={};
        const datas= parseQueryStr(options.body);
        var userId = datas.userId;
        console.log(userId);
        for(var k in items){
            console.log(items[k].userId);
            if(items[k].userId==userId && items[k].isDefault==1){
                item = items[k];
            }
        }
        console.log(item)
        var res ={}
        res={
            data:item,
            status:1,
            message:'查询默认地址'
        }
        return res;    

});
// 设置默认地址

Mock.mock("address/setDefault",'post',function(options){
        var items = addressarr;
        var item ={};
        const datas= parseQueryStr(options.body);
        var id = datas.id;
        for(var k in items){
            if(items[k].id==id){
                items[k].isDefault = 1;
            }else{
                items[k].isDefault = 0;
            }

        }
        localStorage.setItem('address',JSON.stringify(items));
        var res ={}
        res={
            status:1,
            message:'设置默认成功'
        }
        return res;    

});


