import React, {useState} from 'react';
import Select from './Select';
import {action} from "@storybook/addon-actions";

export default {
    title: 'Select',
    component: Select,
};

export const WithValue = () => {

    const [value, setValue] = useState('2')

    return <Select value={value}
                   onChange={setValue}
                   items={[{value: '1', title: "Australia"},
                       {value: '2', title: "Brazil"},
                       {value: '3', title: "China"},
                       {value: '4', title: "Denmark"},
                       {value: '5', title: "Egypt"},
                       {value: '6', title: "Finland"},
                       {value: '7', title: "Ghana"},
                       {value: '8', title: "Hungary"},
                       {value: '9', title: "India"},
                       {value: '10', title: "Japan"}]}/>;
}

export const WithoutValue = () => {

    const [value, setValue] = useState(null)

    return <Select value={value}
                   onChange={setValue}
                   items={[{value: '1', title: "Australia"},
                       {value: '2', title: "Brazil"},
                       {value: '3', title: "China"},
                       {value: '4', title: "Denmark"},
                       {value: '5', title: "Egypt"},
                       {value: '6', title: "Finland"},
                       {value: '7', title: "Ghana"},
                       {value: '8', title: "Hungary"},
                       {value: '9', title: "India"},
                       {value: '10', title: "Japan"}]}/>;

}