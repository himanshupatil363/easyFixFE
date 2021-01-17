import './assets/css/main.css'
import './assets/css/custom.css'
import Home from './admin/pages/home'
import Login from './admin/pages/auth/login'
import Register from './admin/pages/auth/register'
import Forgot from './admin/pages/auth/forgot'
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom';
const Admin = () => {
return(
    <Router>
        <div>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/forgot" component={Forgot} />
            </Switch>
        </div>
    </Router>
)
}
export default Admin; 