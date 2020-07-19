import React from 'react';
import { action } from '@storybook/addon-actions';
import {UncontrolledRating} from "./UncontrolledRating";

export default {
    title: 'UncontrolledRating',
    component: UncontrolledRating,
};

const callBack = action('rating changed inside component')

export const changeRating = () => {
    return <UncontrolledRating defaultValue={2} onChange={callBack}/>
}
