import React from "react";
import {ClockViewPropsType} from "./Clock";
import './AnalogClockView.css'


export const AnalogClockView: React.FC<ClockViewPropsType> = ({data}) => {


    const secondsStyle = {
        transform: `rotate(${data.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${data.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${data.getHours() * 30}deg)`
    };

    return (
       <div className={"clock"}>
           <div className={"analog-clock"}>
               <div className={"dial seconds"} style={secondsStyle} />
               <div className={"dial minutes"} style={minutesStyle} />
               <div className={"dial hours"} style={hoursStyle} />
           </div>
        </div>
    )
}
