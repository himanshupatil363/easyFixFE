import './assets/css/main.css'
import './assets/css/custom.css'
import Home from './admin/pages/home'
import Login from './admin/pages/auth/login'
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import User from './admin/pages/users'
import Provider from './admin/pages/provider'
import Category from './admin/pages/category'
import Subcategory from './admin/pages/subcategory'
import Steps from './admin/pages/steps'
import Packages from './admin/pages/packages'
import Offers from './admin/pages/offers'
const Admin = () => {
return(
    <Router>
        <div>
            <Switch>
                <Route path="/admin/" exact component={Home} />
                <Route path="/admin/login" exact component={Login} />
                <Route path="/admin/users" component={User} />
                <Route path="/admin/provider" component={Provider} />
                <Route path="/admin/category" component={Category} />
                <Route path="/admin/subcategory" component={Subcategory} />
                <Route path="/admin/steps" component={Steps} />
                <Route path="/admin/packages" component={Packages} />
                <Route path="/admin/offers" component={Offers} />
            </Switch>
        </div>
    </Router>
)
}
export default Admin; 