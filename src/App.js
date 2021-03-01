import React from 'react';
import axios from 'axios'; // it would be used to make a get request to acertain API
import './App.css';

class App extends React.Component{
    state = {
        advice: ''
    };

    componentDidMount(){
    }

    //new method i.e a function in a class
    FetchAdvice = () => {
        axios.get();
    }
    render() {
        return(
            <h>APP</h>
        );
    }
}

export default App;