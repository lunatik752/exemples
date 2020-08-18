import React, {useEffect, useState} from "react";

type PropsType = {}

const getTwoDigitsString = (num: number) => num > 10 ? num : '0' + num;

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

    const secondsString =getTwoDigitsString(data.getSeconds())

    const minutesString = getTwoDigitsString(data.getMinutes())

    const horseString = getTwoDigitsString(data.getHours())


    return (
        <div>
            <span>{horseString}</span>
            :
            <span>{minutesString}</span>
            :
            <span>{secondsString}</span>


        </div>
    );
}

