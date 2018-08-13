/*登录和注册都用了redux，所以放在容器组件中；且其有跳转，含有路由组件*/
/*
用户注册的路由组件--一级
 */
import React, {Component} from 'react'
import { Button,NavBar,WingBlank,List,InputItem,Radio,WhiteSpace} from 'antd-mobile';
import Logo from '../../components/logo/logo';
export default class Register extends Component {
  //初始化状态
  state={
    username:'',
    password:'',
    repassword:'',
    type:'dashen'
  }
  toLogin=()=>{
//通过js进行跳转（编程式路由导航-->通过纯js实现路由跳转）
this.props.history.replace('./login')
  }
  handleChange = (name,val)=>{
    this.setState({
      [name]:val
    })
  }//API中传参只传递val，没有穿name
  //请求注册
  register=()=>{
console.log(this.state)
  }
  render() {
const {type} = this.state;
    return (<div>
      <NavBar>硅谷直聘</NavBar>
      <Logo />
       <WingBlank>
        <List>
          <InputItem type="text" placeholder="请输入用户名" onChange={(val)=>this.handleChange('username',val)}>用户名</InputItem>
          <WhiteSpace />
          <InputItem type="text" placeholder="请输入密码" onChange={(val)=>this.handleChange(' password',val)}>密码</InputItem>
          <WhiteSpace />
          <InputItem type="text" placeholder="请确认密码" onChange={(val)=>this.handleChange('repsdpassword',val)}>确认密码</InputItem>
          <WhiteSpace />
       {/*inoutItem是独占一行，而radio不独占一行*/}
        <List.Item>
          <span>用户类型:</span>&nbsp;&nbsp;&nbsp;
          <Radio checked ={type==='laoban'} onChange={()=>{this.handleChange('type','laoban')}}>老板</Radio>
          &nbsp;&nbsp;
          <Radio checked={type==='dashen'} onChange={()=>{this.handleChange('type','dashen')}}>大神</Radio>
        </List.Item>
          <WhiteSpace />
        </List>
         <Button type='primary' onClick={this.register}>注册</Button>
         <Button onClick={this.toLogin}>已有账户</Button>
       </WingBlank>
      </div>
    )
  }
}
/*1)点击注册---->跳转到登录界面（点击事件）-->函数
* 路由的对象；三个属性：history实现路由跳转
* push可前进和回退；
* replace是替代-
* ,location,match
* 2)交互
* 填写完输入框内容，自动收集数据内容（收集方式有手动和自动搜集），与状态有关
*
* a.初始化状态
* b.更新状态
* c.获取状态
* 查看InputItem输入框的API*/