import React from "react";

type AccordionPropsType = {
    titleValue: string,
    accordionCollapsed: boolean,
    onCollapsedChange: () => void
}

export function Accordion(props: AccordionPropsType) {
    console.log('Rendering Accordion');
    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            onCollapsedChange={props.onCollapsedChange}/>

            {!props.accordionCollapsed && <AccordionBody/>}
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

}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log('Rendering AccordionBody');{
        return (
            <div>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </div>
        );
    }
}

