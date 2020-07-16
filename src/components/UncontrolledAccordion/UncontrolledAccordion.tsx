import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";

type UncontrolledAccordionPropsType = {
    titleValue: string,
}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    console.log('Rendering Accordion');

    // const [collapsed, setCollapsed] = useState(false);
    const [state, dispatch] = useReducer(reducer, {collapsed: false});


    const onCollapsedChange = () => {
        // setCollapsed(!collapsed)
       dispatch({type: TOGGLE_COLLAPSED}) ;

    }

    return (
        <div>
            <AccordionTitle title={props.titleValue} onCollapsedChange={onCollapsedChange} />

            {!state.collapsed && <AccordionBody/>}
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

