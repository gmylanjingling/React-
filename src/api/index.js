/*组件发送请求，经过redux，ajax在最下层，agax请求方式axios*/
/*包含n个接口请求函数，每个函数返回的都是promise对象*/
//使用----- 》请求注册
import ajax from './ajax';
export const reqRegister = ({username,password,type})=>ajax('/register',{username,password},type,'POST');
//请求登陆---->对应接口
export const reqLogin = (username,password)=>ajax('/login',{username,password},'POST');