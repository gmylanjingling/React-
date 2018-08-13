/*使用axios封装的ajax请求函数，函数返回的是promise对象*/
import axios from 'axios';
export default  function ajax(url='',data={},type='GET'){
  if(type==='GET'){
    //根据data来拼query参数串
    let queryStr = '';//数据拼接字符串
    Object.keys(data).forEach(key=>{
      const value=data[key];
      queryStr +=`${key}=${value}&`
      //动态拼串  username=xiaoming&
    })
    if(queryStr){ //有参数--->字符串方法substring
      //username=tom&password=123&---留下&之前的
      queryStr = queryStr.substring(0,queryStr.length-1);
      url+='?'+queryStr
    }//字符串本身不可变，重新赋值才可以
    //作用得到指定对象的所有属性名组成的数组
    return axios.get(url)
    //若没有传参返回原url,传参改变
  }else if(type==='POST'){
    return axios.post(url,data)
  }
}