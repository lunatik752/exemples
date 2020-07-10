import React, {ChangeEvent, useRef, useState} from 'react';

export default {
  title: 'input',
  // component: Button,
};

export const UncontrolledInput = () => <input />;
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

 return <><input onChange={onChange}/> - {value}</>;
}

export const GetValueOfUncontrolledInputByButtonPress = () => {

    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const submit = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

 return <><input ref={inputRef} /> <button onClick={submit}>submit</button> - actual value: {value}</>;
}

export const ControlledInputWithFixedValue = () => <input value={'it-incubator'}/>;
