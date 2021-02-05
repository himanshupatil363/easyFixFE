import './assets/css/main.css'
import './assets/css/custom.css'
import React from 'react';
import Contact from './pages/contact'
import Categories from './pages/categories'
import About from './pages/about'
import Login from './pages/auth/login'
import Register from './pages/auth/register'
import Forgot from './pages/auth/forgot'
import passwordreset from './pages/auth/ResetPassword'
import Home from './pages/home'
import Api from './pages/api'
import Service from './components/categories/service'
import PrivateRoute from './components/routing/PrivateRoute'
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom';

const User = () => {
return(
    <Router>
            <Switch>
                <PrivateRoute exact path="/" component={Home}/> 
                <PrivateRoute path="/categories" component={Categories} />
                <PrivateRoute path="/about" component={About} />
                <PrivateRoute path="/contact" component={Contact} />
                <Route path="/login" exact component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/forgot" component={Forgot} />
                <Route path="/api" component={Api} />
                <Route path="/passwordreset/:resetToken" component={passwordreset} />
                <PrivateRoute exact path={"/cat/:id"} component={Service}/>
            </Switch>
    </Router>
    )
}
export default User;