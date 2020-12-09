import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/main.css'
import './assets/css/custom.css'
import Home from './home'
import Navbar from './components/Navbar/Navbar';
ReactDOM.render(
<div>
    <Navbar />
    <Home />   
</div>,document.getElementById('root'));
