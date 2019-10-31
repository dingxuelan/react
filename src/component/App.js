import React,{Component} from 'react';
import {addTwo,deTwo} from '../redux';
export default class App extends Component{
    state = {
        allState:this.props.store.getState()//获取redux中state中的值
    }
    
    componentDidMount(){
        let store = this.props.store;
     
        store.subscribe(() => {//监听数据变换，更新数据
            this.setState({
                allState: store.getState()
            })
            console.log(store.getState())
        })
    }

    handleAddTwo=(number)=>{
       
        this.props.store.dispatch(addTwo(number))
    };
    handleDelTwo=(number)=>{
        this.props.store.dispatch(deTwo(number))
    }
    render (){
       
        
        return(
            <div>
                <div>计数为:{this.state.allState}</div>
                <div>
                    <button onClick={()=>{this.handleAddTwo(2)}}>+2</button><br/><br/>
                    <button onClick={()=>{this.handleDelTwo(2)}}>-2</button><br/><br/>
                </div>     
            </div>
        )
    }
}