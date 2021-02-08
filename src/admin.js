import './assets/css/main.css'
import './assets/css/custom.css'
import Dashboard from './admin/pages/dashboard'
import Login from './admin/pages/auth/login'
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import User from './admin/pages/users'
import Provider from './admin/pages/provider'
import Category from './admin/pages/category'
import Services from './admin/pages/services'
import Orders from './admin/pages/orders'
import Feedbacks from './admin/pages/feedback'
import PrivateRoute from './components/routing/PrivateRoute'
const Admin = () => {
return(
    <Router>
        <div className="h-full">
            <Switch>
                <PrivateRoute path="/" exact component={Dashboard} />
                <Route path="/login" exact component={Login} />
                <PrivateRoute path="/users" component={User} />
                <PrivateRoute path="/provider" component={Provider} />
                <PrivateRoute path="/category" component={Category} />
                <PrivateRoute path="/services" component={Services} />
                <PrivateRoute path="/orders" component={Orders} />
                <PrivateRoute path="/feedbacks" component={Feedbacks} />
            </Switch>
        </div>
    </Router>
)
}
export default Admin; 