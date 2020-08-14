import React, {useState} from "react";

export default {
    title: 'useState demo',
};

function generateData() {
    // difficult counting
    console.log('generateData')
    return 3589745654412;
}

export const Example1 = () => {
    console.log('Example1')
    const [count, setCount] = useState(generateData);


    return <>
        <button onClick={() => setCount(state => state + 1)}>add +</button>
        {count}
    </>

}