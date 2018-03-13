import React from 'react'
import {NavBar,WingBlank,List,InputItem,WhiteSpace,Button} from 'antd-mobile'
import Logo from '../../components/logo/logo'

export default class Login extends React.Component {
    // 给当前组件对象指定state属性(初始值)
    state = {
        name: '', // 用户名
        pwd: '',
    }
// 更新指定属性名的状态
    handleChange(name, val) { // 属性名为name的值
        this.setState({
            [name]: val   // name是一个变量
        })
    } // handleChange('pwd', '345')

    // 切换到login
    goRegister = () => {
        this.props.history.replace('/register')
    }
    // 处理注册
    handleLogin = () => {
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <NavBar>硅谷直聘</NavBar>
                <Logo/>
                <WingBlank>
                    <List>
                        <InputItem onChange={(val) => {this.handleChange('name', val)}}>用户名:</InputItem>
                        <WhiteSpace/>
                        <InputItem type="password" onChange={(val) => {this.handleChange('pwd', val)}}>密码:</InputItem>
                        <WhiteSpace/>
                        <Button type="primary" onClick={this.handleLogin}>登录</Button>
                        <Button onClick={this.goRegister}>mei有帐户</Button>
                    </List>
                </WingBlank>



            </div>
        )

    }
}