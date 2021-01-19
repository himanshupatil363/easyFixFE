import './assets/css/main.css'
import './assets/css/custom.css'
import Home from './pages/home'
import Contact from './pages/contact'
import Categories from './pages/categories'
import About from './pages/about'
import Login from './pages/auth/login'
import Register from './pages/auth/register'
import Forgot from './pages/auth/forgot'
import Api from './pages/api'
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom';
const User = () => {
return(
    <Router>
        <div>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/categories" component={Categories} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/login" exact component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/forgot" component={Forgot} />
                <Route path="/api" component={Api} />
            </Switch>
        </div>
    </Router>
    )
}
export default User;