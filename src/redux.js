// //初始化state值
// import {createStore} from 'redux';
// const initialState=0
// //action 其实就是描述将要发生什么，将事件分类，这里分成加，减，重置
// const add={type:'ADD'};
// const minus={type:'MINUS'};
// const reset={type:'RESET'};
// export const addTwo = (number) =>({type:"ADDTWO",number:number});
// export const deTwo = (number) =>({type:"DETWO",number:number});
// //reducer,指定了应用状态的变化如何响应actions并发送到store的
// function counter(state = initialState,action) {
//     console.log(action.type)
//     switch(action.type) {
//         case "ADDTWO":
//             return state + action.number;
//             break;
//         case "DETWO":
//             return state - action.number;
//             break;
//         default:
//             return state
//     }

// }
// //创建store
// const store=createStore(counter);
// //暴露组件需要的东西(一般是action和store)
// export {store,add,minus,reset}
