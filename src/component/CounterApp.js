
import Counter from './counter';
import {connect} from 'react-redux';
import {counterAddAction,counterSubAction} from '../store/action';
//这里引入组件Counter，引入action，引入connect

//将state映射到组件的props
const mapStateToProps=state=>{
    return{
        count:state.count
    }
}
//将action映射到组件的props
const mapDispatchToProps=dispatch=>{
    return{
        counterAdd:()=>{
            dispatch(counterAddAction)
        },
        counterSub:()=>{
            dispatch(counterSubAction)
        }
    }
}
//通过connect将组件和state关联起来，这样在组件中可以通过this.props来获取state
const CounterApp=connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)
export default CounterApp;
