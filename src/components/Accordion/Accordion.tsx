import React from "react";

type ItemType = {
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

function AccordionWithoutMemo(props: AccordionPropsType) {
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

export const Accordion = React.memo(AccordionWithoutMemo)

type AccordionTitlePropsType = {
    title: string,
    onCollapsedChange: () => void

}

function AccordionTitleWithoutMemo(props: AccordionTitlePropsType) {
    console.log('Rendering AccordionTitle');
    return (
        <h3 onClick={() => props.onCollapsedChange()}>{props.title}</h3>
    );
}

export const AccordionTitle = React.memo(AccordionTitleWithoutMemo)

type AccordionBodyPropsType = {
    items: ItemType[],
    onClick: (value: any) => void
}

function AccordionBodyWithoutMemo(props: AccordionBodyPropsType) {
    console.log('Rendering AccordionBody');
    {
        return (
            <div>
                <ul>
                    {props.items.map((i, index) => <li key={index} onClick={() => {
                        props.onClick(i.value)
                    }}>{i.title}</li>)}
                </ul>
            </div>
        );
    }
}

export const AccordionBody = React.memo(AccordionBodyWithoutMemo)
