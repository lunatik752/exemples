import React, {useEffect, useState} from "react";
import {DigitalClockView} from "./DigitClockView";
import {AnalogClockView} from "./AnalogClockView";

type PropsType = {
    mode: 'digital' | 'analog'
}

export const getTwoDigitsString = (num: number) => (num < 10) ? '0' + num : num;

export const Clock: React.FC<PropsType> = (props) => {

    const [data, setNow] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('TIK')
            setNow(new Date())
        }, 1000);

        return () => {
            clearInterval(intervalId)
        }
    }, [])



    let view;

    switch (props.mode) {
        case "analog":
            view = <AnalogClockView data={data}/>
            break;
        case "digital":
        default:
            view = <DigitalClockView data={data}/>

    }


    return <div>
        {view}
    </div>
}

export type ClockViewPropsType ={
    data: Date
}


