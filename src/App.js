import React from 'react';
import axios from 'axios'; // it would be used to make a get request to acertain API
import './App.css';

class App extends React.Component{
    state = {
        advice: ''
    };

    componentDidMount(){
        this.FetchAdvice();
    }

    //new method i.e a function in a class
    FetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
        .then((response) => {
            const {advice} = response.data.slip;

            this.setState({advice});
        })
        .catch((error) => {
            
        });
    }
    render() {
        const {advice} = this.state;
        return(
            <div className = "app">
                <div className= "card">
                    <h1 className= "heading">{advice}</h1>
                    <button className ="button" onClick = {this.FetchAdvice}>
                        <span>GIVE ME ADVICE!!!</span>
                    </button>
                </div>
            </div>
        
        );
    }
}

export default App;