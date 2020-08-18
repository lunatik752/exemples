import React, {useEffect, useState} from "react";

export default {
    title: 'MyClock',
};


export const MyClockExample = () => {


    const [now, setNow] = useState(new Date());

    useEffect(() => {
        setInterval(() => {
            setNow(new Date())
        }, 1000)
    }, [])


    return <>
        Clock:  {now.getHours()} : {now.getMinutes()} : {now.getSeconds()}
    </>
}


