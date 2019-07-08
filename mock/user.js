
var arr =[

        {user:'13811269437',nickname:'alice',age:18,city:'北京'},
        {user:'13811269431',nickname:'tom',age:20,city:'北京'},
        {user:'13811269432',nickname:'tina',age:19,city:'天津'},
        {user:'13811269434',nickname:'jerry',age:22,city:'上海'}
    ];
// 将接收的数据字符串转为对象  phone=14545454545&nickname=alice
function parseQueryStr(queryStr){
     let queryData={};
      
     let queryStrList = queryStr.split('&');//去除所有的&连接符  ['phone=14545454545','nickname=alice']
      
    for(var i = 0; i<queryStrList.length;i++ ){
        let itemList = queryStrList[i].split('='); // ['phone','14545454545'] ['nickname','alice']
        queryData[itemList[0]] = decodeURIComponent(itemList[1]);
        
        /*
           queryData ={
           	   phone:'14545454545',
           	   nickname:'alice'
           	
           }
        */
    } 
    return queryData
}
/*模拟查找数据的方式*/
Mock.mock("user/login",'post',function(options){
	    // 1接收前端提交的数据
        console.log(options.body)
        const datas= parseQueryStr(options.body);
        
        var user = datas.phone;
        // 2. 在arr数值中查找用户名称如果存在返回用户信息
        var item='';
        for(var i in arr){
           
            if(arr[i].user==user){//在数组arr里找到这个id
                item=arr[i];
                break;
            }
        }
        if(item!=0){
           var data={
                data:item,
                status:1,
                message:"登录成功"
            }
            return data
        }else{

            var obj ={
                user:user,
                nickname:'哈哈',
                age:18,
                city:'北京'
            }
            arr.push(obj);
            var data={
                data:obj,
                status:1,
                message:"注册并且登录成功！"

            }
            return data;
            
        }      

});