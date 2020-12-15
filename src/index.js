import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/main.css'
import './assets/css/custom.css'
import Home from './pages/home'
import Contact from './pages/contact'
import Categories from './pages/categories'
import About from './pages/about'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom';

ReactDOM.render(
<Router>
    <div>
        <Navbar />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/categories" component={Categories} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
        </Switch>
        <Footer/>
    </div>
</Router>
,document.getElementById('root'));
