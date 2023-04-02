import React from "react";
import './Circle.css';

const Circle = (props) => {
    let circleClass = '';

    if (props.number === 0 ){
      circleClass = 'circle'
    } else if(props.number % 2 === 0) {
        circleClass = 'even';
    } else {
        circleClass = 'odd';
    }
    return(
        <div className={circleClass}>
       <h2 > {props.number}</h2>
        </div>
    )
}

export default Circle;