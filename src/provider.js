import React from 'react';
import './assets/css/main.css'
import './assets/css/custom.css'
import Home from './Admin/pages/home'
import Login from './Admin/pages/auth/login'
import Register from './Admin/pages/auth/register'
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom';
const Provider =()=>{
return(
            <Router>
        <div>
            <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
        </Switch>
        </div>
    </Router>
);
}
export default Provider;