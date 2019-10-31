import React,{ Component } from 'react';
import { thisTypeAnnotation } from '@babel/types';
class Navb extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return<div>
            <span className="Pright">我是B页面</span>
            <span>我是接收的参数,路由参数设置是在path后面:{this.props.match.params.name}</span>
        </div>
    }
}
export default Navb;