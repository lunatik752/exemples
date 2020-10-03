import React from "react";
import {ClockViewPropsType, getTwoDigitsString} from "./Clock";

export const DigitalClockView: React.FC<ClockViewPropsType> = ({data}) => {

    const secondsString = getTwoDigitsString(data.getSeconds())

    const minutesString = getTwoDigitsString(data.getMinutes())

    const horseString = getTwoDigitsString(data.getHours())

    return <>
        <span>{horseString}</span>
        :
        <span>{minutesString}</span>
        :
        <span>{secondsString}</span>
    </>
}
