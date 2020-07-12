import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Accordion} from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion,
};

const callBack = action('Accordion mode change fired');
const onClickCallBack = action('some item was clicked')

export const CollapsedMode = () => <Accordion titleValue={'Menu'}
                                              accordionCollapsed={true}
                                              onCollapsedChange={callBack}
                                              items={[{title: 'Natalia', value: 1},
                                                  {title: 'Max', value: 2},
                                                  {title: 'Alex', value: 3},
                                                  {title: 'Helen', value: 4}]}
                                              onClick={onClickCallBack}/>;
export const UnCollapsedMode = () => <Accordion titleValue={'Menu'}
                                                accordionCollapsed={false}
                                                onCollapsedChange={callBack}
                                                items={[{title: 'Natalia', value: 1},
                                                    {title: 'Max', value: 2},
                                                    {title: 'Alex', value: 3},
                                                    {title: 'Helen', value: 4}]}
                                                onClick={onClickCallBack}/>;


export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion titleValue={'Menu'}
                      accordionCollapsed={value}
                      onCollapsedChange={() => setValue(!value)}
                      items={[{title: 'Natalia', value: 1},
                          {title: 'Max', value: 2},
                          {title: 'Alex', value: 3},
                          {title: 'Helen', value: 4}]}
                      onClick={(value) => {alert(`user with ID ${value} should by happy`)}}/>
}
