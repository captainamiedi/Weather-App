import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import CurrentWeather from './src/currentWeatherComp/index';


const styleApp = {
    textAlign: 'center',
    fontFamily: 'Helvetica Neue',
    paddingTop: '20px'
};
class App extends React.Component {
    render () {
        return (
            <div style= {styleApp}>
                <CurrentWeather />
            </div>
        );
    }
}

export default App;
