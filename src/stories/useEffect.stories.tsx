import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect demo',
};


export const SimpleExample = () => {

    const [fake, setFake] = useState(1);
    const [count, setCount] = useState(1);

    console.log('SimpleExample')

    useEffect(() => {
        console.log('useEffect every render');
        document.title = count.toString()
    })

    useEffect(() => {
        console.log('useEffect only first render (componentDidMount)');
        document.title = count.toString()
    }, [])


    useEffect(() => {
        console.log('useEffect first render and  every count changed');
        document.title = count.toString()
    }, [count])

    return <>
        Hello, {count}
        <button onClick={() => setCount(count + 1)}>add +</button>
        <button onClick={() => setFake(fake + 1)}>fake add +</button>
        {fake}

    </>
}

