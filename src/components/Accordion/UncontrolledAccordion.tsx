import React, {useState} from "react";

type UncontrolledAccordionPropsType = {
    titleValue: string,
}

function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    console.log('Rendering Accordion');
    const [collapsed, setCollapsed] = useState(false)
    const onCollapsedChange = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div>
            <AccordionTitle title={props.titleValue} onCollapsedChange={onCollapsedChange} />

            {collapsed && <AccordionBody/>}
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string
    onCollapsedChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('Rendering AccordionTitle');
    return (
        <h3 onClick={props.onCollapsedChange}>{props.title}</h3>
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

export default UncontrolledAccordion;