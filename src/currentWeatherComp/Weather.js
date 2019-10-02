import React from 'react';


const Weather = (props) => {
    return (
        <div>
            {props.city && props.country && <h1 className="pt-4"> {props.city}, {props.country}</h1>}
            {props.humidity && <h4 className="pb-4 mb-3 pt-4">humidty: {props.humidity}</h4>}
            {/* {props.temperature && <p>temperature: {props.temperature}&deg;</p>} */}
            {props.error && <p>{props.error}</p>}
            <h4><i className={`wi ${props.weatherIcon} display-1`} /></h4>
            {props.celsius && <h2 className="py-4">{props.celsius}&deg;</h2>}
            {mimmaxTemp(props.temp_min, props.temp_max)}
            {props.description && <h4 className="py-3"> {props.description}</h4>}
        </div>
    );
};

function mimmaxTemp (min, max) {
    if (min && max) {
        return (
            <h3>
                <span className="px-2"> {min}&deg;</span>
                <span className="px-2"> {max}&deg;</span>
            </h3>
        );
    }
    // );
}

export default Weather;
