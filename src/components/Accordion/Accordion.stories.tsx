import React, {useState} from 'react';
import { action } from '@storybook/addon-actions';
import {Accordion} from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion,
};

const callBack = action('Accordion mode change fired')

export const CollapsedMode = () => <Accordion titleValue={'Menu'} accordionCollapsed={true}  onCollapsedChange={callBack}/>;
export const UnCollapsedMode = () => <Accordion titleValue={'Menu'} accordionCollapsed={false}  onCollapsedChange={callBack}/>;


export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion titleValue={'Menu'} accordionCollapsed={value}  onCollapsedChange={() => setValue(!value)}/>
}
