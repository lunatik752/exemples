import React from "react";

type ItemType ={
    title: string,
    value: any
}

type AccordionPropsType = {
    titleValue: string,
    accordionCollapsed: boolean,
    onCollapsedChange: () => void,
    items: ItemType[],
    onClick: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {
    console.log('Rendering Accordion');
    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            onCollapsedChange={props.onCollapsedChange}/>

            {!props.accordionCollapsed && <AccordionBody
                items={props.items}
            onClick={props.onClick}/>}
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string,
    onCollapsedChange: () => void

}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('Rendering AccordionTitle');
    return (
        <h3 onClick={() => props.onCollapsedChange()}>{props.title}</h3>
    );
}

type AccordionBodyPropsType = {
    items: ItemType[],
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log('Rendering AccordionBody');
    {
        return (
            <div>
                <ul>
                    {props.items.map((i, index) => <li key={index} onClick={() => {props.onClick(i.value)}}>{i.title}</li>)}
                </ul>
            </div>
        );
    }
}

