import React, {useState} from 'react';
import { action } from '@storybook/addon-actions';
import {OnOff} from "./OnOff";

export default {
    title: 'OnOff',
    component: OnOff,
};

const callBack = action('on or off clicked')

export const OnMode = () => <OnOff on={true} onOnChanged={callBack}/>;
export const OffMode = () => <OnOff on={false} onOnChanged={callBack}/>;

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <OnOff on={value} onOnChanged={setValue} />
}
