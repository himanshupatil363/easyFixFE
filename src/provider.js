import React from 'react';
import './assets/css/main.css'
import './assets/css/custom.css'
import Home from './provider/pages/home'
import Login from './provider/pages/auth/login'
import Register from './provider/pages/auth/register'
import Forgot from './provider/pages/auth/forgot'
import Profile from './provider/pages/profile'
import Orders from './provider/pages/orders'
import Services from './provider/pages/services'
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom';
const Provider =()=>{
return(
            <Router>
        <div className="Provider bg-adbg h-screen">
            <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/forgot" component={Forgot} />
            <Route path="/profile" component={Profile}/>
            <Route path="/orders" component={Orders}/>
            <Route path="/services" component={Services}/>
        </Switch>
        </div>
    </Router>
);
}
export default Provider;