import React from 'react';
import ReactDOM from 'react-dom/client';
import CounterApp from './components/CounterApp';
// import FirstApp  from './components/FirstApp';
import './style.css'
// import { HelloWorldApp } from './components/HelloWorldApp';






ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        
        <CounterApp value={100}></CounterApp>
   

    </React.StrictMode>
);