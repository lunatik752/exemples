import React, {useEffect, useState} from "react";

export default {
    title: 'UseEffect demo',
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

export const SetTimeoutExample = () => {

    const [fake, setFake] = useState(1);
    const [count, setCount] = useState(1);

    console.log('SetTimeoutExample')


    // useEffect(() => {
    //     setTimeout(() => {
    //         console.log('setTimeout')
    //         document.title = count.toString()
    //     }, 1000)
    // }, [count])


    useEffect(() => {
        setInterval(() => {
            setCount(state => state +1)
        }, 1000)
    }, [])


    return <>
        Hello, counter:  {count}  -  fake: {fake}
        {/*<button onClick={() => setCount(count + 1)}>add +</button>*/}
        {/*<button onClick={() => setFake(fake + 1)}>fake add +</button>*/}
        {fake}

    </>
}

export const ResetEffectExample = () => {

    const [count, setCount] = useState(1);

    console.log('ResetEffectExample with ' +  count)



    useEffect(() => {
        console.log('Effect occurred ' + count)

        return () => {
            console.log('RESET EFFECT ' + count)
        }
    }, [count])


    return <>
        Hello, counter:  {count}  -
        <button onClick={() => setCount(count + 1)}>add +</button>
    </>
}
