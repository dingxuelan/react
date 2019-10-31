import React from 'react';
import {Component} from 'react';

class Counter extends Component{
    render(){
        console.log(this.props)
        const {count,counterAdd,counterSub }=this.props;
        
        return(
            <div>
                <button onClick={counterAdd}>点击加1</button>
                <button onClick={counterSub}>点击减一</button>
                <div>
                    <div>计数器值：{count}</div>
                </div>
            </div>
        )
    }

}
export default Counter;