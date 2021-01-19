import './assets/css/main.css'
import './assets/css/custom.css'
import Home from './admin/pages/home'
import Login from './admin/pages/auth/login'
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom';
const Admin = () => {
return(
    <Router>
        <div>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={Login} />
            </Switch>
        </div>
    </Router>
)
}
export default Admin; 