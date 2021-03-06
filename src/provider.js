import './assets/css/main.css'
import './assets/css/custom.css'
import Home from './provider/pages/home'
import Login from './provider/pages/auth/login'
import Register from './provider/pages/auth/register'
import Forgot from './provider/pages/auth/forgot'
import Orders from './provider/pages/orders'
import Edit from './provider/components/services/edit'
import Editorder from './provider/pages/editorder'
import Dashboard from './provider/pages/dashboard'
import PrivateRoute from './components/routing/PrivateRoute'
import AddService from './provider/components/services/add'
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom';
const Provider =()=>{

return(
    <Router>
        <div className="Provider bg-adbg min-h-full">
            <Switch>
                <PrivateRoute path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/forgot" component={Forgot} />
                <PrivateRoute path="/orders" component={Orders}/>
                <PrivateRoute path="/addservice" component={AddService}/>
                <PrivateRoute path="/dashboard" component={Dashboard}/>
                <PrivateRoute exact path={"/editorder/:id"} component={Editorder}/>
                <PrivateRoute exact path={"/edit/:id"} component={Edit}/>
            </Switch>
        </div>
    </Router>
);
}
export default Provider;