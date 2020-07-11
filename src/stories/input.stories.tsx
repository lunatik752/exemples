import React, {ChangeEvent, useRef, useState} from 'react';
import {action} from "@storybook/addon-actions";

export default {
    title: 'input',
    // component: Button,
};

export const UncontrolledInput = () => <input/>;
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

    return <><input ref={inputRef}/>
        <button onClick={submit}>submit</button>
        - actual value: {value}</>;
}

export const ControlledInputWithFixedValue = () => <input value={'it-incubator'}/>;


export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('');
    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <input value={parentValue} onChange={onInputChange}/>
};


export const ControlledCheckbox = () => {

    const [parentValue, setParentValue] = useState(false);
    const onCheckboxInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }

    return <input type={'checkbox'} checked={parentValue} onChange={onCheckboxInputChange}/>
};

export const ControlledSelect = () => {

    const [parentValue, setParentValue] = useState<string | undefined>('1');
    const onSelectorChange = (e: ChangeEvent<HTMLSelectElement>) => {
         setParentValue(e.currentTarget.value)
    }

    return <select value={parentValue} onChange={onSelectorChange}>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Moscow</option>
        <option value={'3'}>Kiev</option>
    </select>
};