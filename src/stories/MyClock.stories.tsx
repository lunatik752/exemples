import React, {useEffect, useState} from "react";

export default {
    title: 'MyClock',
};

const getTwoDigitsString = (num: number) => (num < 10) ? '0' + num : num;

export const MyClockExample = () => {


    const [now, setNow] = useState(new Date());

    useEffect(() => {
       const intervalId = setInterval(() => {
            console.log('TIK-TAK')
            setNow(new Date())
        }, 1000);
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    const hours = getTwoDigitsString(now.getHours())
    const minutes = getTwoDigitsString(now.getMinutes())
    const seconds = getTwoDigitsString(now.getSeconds())

    return <>
        Clock:  {hours} : {minutes} : {seconds}
    </>
}


