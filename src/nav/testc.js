import React,{ Component } from 'react';
class Navc extends Component{
    constructor(props){
        super(props);
        console.log(this.props.location.query)
        console.log(this.props.location.state)
    }
    render(){
        return<div>
            <span className="Pright">我是C页面</span>
          
            </div>
    }
}
export default Navc;