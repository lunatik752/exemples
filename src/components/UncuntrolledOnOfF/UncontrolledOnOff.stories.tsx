import React from 'react';
import {UncontrolledOnOff} from './UncontrolledOnOff';


export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
};

// const callBack = action('on or off clicked')


export const ModeChanging = () => {
    return <UncontrolledOnOff />
}
