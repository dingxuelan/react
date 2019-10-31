import React,{Component} from 'react';
import Nava from './nav/testa';
import Navb from './nav/testb';
import Navc from './nav/testc';
import Error from './nav/error';
import {Route,Switch,Redirect} from 'react-router-dom';
import './index.css'
class Allrouter extends Component{
    render(){
        return <Switch>
            <Route exact path="/" component={Nava} />
            <Route  path="/Navb/:name" component={Navb} />
            <Route  path="/Navc" component={Navc} />
            <Redirect from="/redirect" to="/Navb" />       
            <Route component={Error} />
        </Switch>
    }
}
export default Allrouter;

