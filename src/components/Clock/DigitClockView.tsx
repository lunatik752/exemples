import React from "react";
import {ClockViewPropsType} from "./Clock";

const getTwoDigitsString = (num: number) => (num < 10) ? '0' + num : num;

export const DigitalClockView: React.FC<ClockViewPropsType> = ({data}) => {

    const secondsString = getTwoDigitsString(data.getSeconds())

    const minutesString = getTwoDigitsString(data.getMinutes())

    const horseString = getTwoDigitsString(data.getHours())

    return <div>

        <span>{horseString}</span>
        :
        <span>{minutesString}</span>
        :
        <span>{secondsString}</span>
    </div>
}
