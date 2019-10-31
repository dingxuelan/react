
import React from 'react';
import ReactDOM from 'react-dom';
import Counterapp from './component/CounterApp';
import {createStore} from 'redux';
import { Provider } from 'react-redux'
import Reducers from './store/reducer';
const store = createStore(Reducers)

ReactDOM.render(
    <Provider store={store}> 
        <Counterapp/>
    </Provider>, document.getElementById('root')
);
// import React from 'react';
// import ReactDOM from 'react-dom';
// import {BrowserRouter as Router} from 'react-router-dom';
// import Routercomponent from './router';
// import Nav from './nav/Nav'
// ReactDOM.render(<Router><Nav /><Routercomponent /></Router>,document.getElementById('root'))


