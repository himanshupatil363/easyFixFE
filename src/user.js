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
import PrivateScreen from './pages/PrivateScreen'
import Api from './pages/api'
import PrivateRoute from './components/routing/PrivateRoute'
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom';
const User = () => {
return(
    <Router>
            <Switch>
                
                <PrivateRoute exact path="/" component={PrivateScreen}/> 
                <Route path="/categories" component={Categories} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/login" exact component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/forgot" component={Forgot} />
                <Route path="/api" component={Api} />
                <Route path="/passwordreset/:resetToken" component={passwordreset} />
            </Switch>
    </Router>
    )
}
export default User;