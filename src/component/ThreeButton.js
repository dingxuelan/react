import React,{Component} from 'react';
import { add, minus, reset } from '../redux';
//引入connect，主要是用来获取store，转化成props
import {connect} from 'react-redux';

function ThreeButton(props) {
   
    return (
        <div style={{textAlign: "center"}}>
            <h1 id="counter">{props.counter}</h1>
            <button type="button" className="btn btn-primary" style={{marginRight: '10px'}}
                onClick={props.add}>Add</button>
            <button type="button" className="btn btn-success" style={{marginRight: '10px'}}
                onClick={props.minus}>Minus</button>
            <button type="button" className="btn btn-danger"
                onClick={props.reset}>Reset</button>
        </div>
    )
}

// 把store中的state 转化为纯渲染组件props
const mapStateToProps = state => ({
    counter: state.counter
})

// 获取store中的dispatch，同时和action接合，组成纯渲染组件props，渲染组件中,直接调用对象的属性，就可以dispatch action 了
const mapDispatchToProps = dispatch => ({
    add: () => dispatch(add),
    minus: () => dispatch(minus),
    reset: () => dispatch(reset)
})

// connect 函数把它们接合起来，ThreeButton就可以使用props来使用mapStateToProps和mapDispatchToProps中返回的对象属性
// 同时返回一个组件，可以在父组件App.js 中直接调用
export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(ThreeButton)
