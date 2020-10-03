import React from 'react';
import {Clock} from "./Clock";

export default {
    title: 'ClockComponent',
    component: Clock,
};


export const BaseAnalogClockExample = () => <Clock mode={'analog'}/>;

export const BaseDigitalClockExample = () => <Clock mode={'digital'}/>;
