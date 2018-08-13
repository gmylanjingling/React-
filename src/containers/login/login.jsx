
/*
用户登陆的路由组件----一级
 */
import React, {Component} from 'react'
import { Button,NavBar,WingBlank,List,InputItem,WhiteSpace} from 'antd-mobile';
import Logo from '../../components/logo/logo';
export default class Login extends Component {
  //初始化状态
  state={
    username:'',
    password:'',
  }
  //跳转注册
  toRegister=()=>{
//通过js进行跳转（编程式路由导航-->通过纯js实现路由跳转）
    this.props.history.replace('./register')
  }
  //请求登录
  login=()=>{
    console.log(this.state)
  }
  handleChange = (name,val)=>{
    this.setState({
      [name]:val
    })
  }
  render() {
    return (<div>
        <NavBar>硅谷直聘</NavBar>
        <Logo />
        <WingBlank>
          <List>
            <InputItem type="text" placeholder="请输入用户名" onChange={(val)=>this.handleChange('username',val)}>用户名</InputItem>
            <WhiteSpace />
            <InputItem type="text" placeholder="请输入密码" onChange={(val)=>this.handleChange(' password',val)}>密码</InputItem>
            <WhiteSpace />
          </List>
          <Button type='primary'>登录</Button>
          <Button onClick={this.toRegister}>没有账户</Button>
        </WingBlank>
      </div>
    )
  }
}