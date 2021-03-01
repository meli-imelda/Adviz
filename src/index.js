import React from 'react';
import ReactDom from 'react-dom';           //so that we can hook onto that element in which the whole application is going to be contained in

import App from './App';

ReactDom.render(<App />, document.getElementById('root')); 
//it has two parameters, first the one is the component we want to render;
// in this case it is the main component which is the App.js and the second; it is the element we want to hook unto
//in this case it is the root inn index.html, meaning that our whole react application is going to be contained 
//in this div with id Root