import React, {useMemo, useState} from "react";

export default {
    title: 'React memo',
};


export const DifficultCountingExample = () => {

    const [a, setA] = useState<number>(3)
    const [b, setB] = useState<number>(3)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(()=>{
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 100000000) {
                fake++;
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i;
        }
            return tempResultA
    },[a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i;
    }

    return <>
        <div><input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/></div>
        <div><input value={b} onChange={(e) => setB(+e.currentTarget.value)}/></div>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('UsersSecret')
    return <div>
        {props.users.map((u,i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)


export const HelpsToReactMemo = () => {
    console.log('HelpsToReactMemo')
    const [count, setCount] = useState(0);
    const [users, setUsers] = useState(['Maxim', 'Natasha', 'Alex', 'Helen']);

    const newArray = useMemo(()=>{
        return users.filter(u=>u.toLowerCase().indexOf('a') > -1)
    },[users])

    const addUser = () => {
        const newUsers = [...users, 'anybody' + new Date().getTime()];
        setUsers(newUsers)
    }


    return <>
        <button onClick={() => setCount(count+1)}>add + </button>
        <button onClick={addUser}>add user </button>
        {count}
        <Users users={newArray}/>
    </>

}