import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
//link标签用来跳转，其中to是要跳转的路由，路由时在路由文件（这里时allRouter）中定义的
class Nav extends Component{
    constructor (props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
        this.goToc=this.goToc.bind(this);
        this.state={
            name:'xuelanDing',
            age:18
        }
    }
    handleClick(){
        console.log(this.props)
        this.props.history.push(`/Navb/${this.state.name}`)
    }
    goToc(){
        this.props.history.push({pathname:'/Navc',query:{name:'xuelanDing',age:19}})
    }
    render(){
        let name = this.state.name;
        return <div className="navList">
            <Link   to='./'>点击我去A页面</Link>
            <Link to={'/Navb/' + name}>点击我去B页面(设置了参数)</Link>
            <Link to='/Navc'>点击我去C页面</Link>
            <Link to='/test'>测试404</Link>
            <Link  to='/redirect'>测试跳转</Link>
            <button onClick={this.handleClick}>通过js方法跳转到B页面</button>
            <Link to={{pathname:'/Navc',state:{name:'xuelanDing',price:20}}}>去c页面(通过state传参)</Link>
            <button onClick={this.goToc} style={{paddingLeft:'20px'}}>点击我去C页面，并且通过query传参</button>
        </div>
    }
}
export default withRouter(Nav);

// 总结：
// 1：传参如果是在path后面设置路径，可以通过link和this.props.history.push来跳转，且必须传参，且会在地址栏显示
// 接收此种方式参数的方式是 this.props.match.params.XX

// 2：跳转到一个页面可以通过query携带参数，不在地址栏显示，但刷新参数消失
// 接收此种传参方式的参数的方式是 this.props.location.query

// 3：通过link的state传参，不在地址栏显示，且刷新不消失
// 接收此种传参方式的参数 this.props.location.state