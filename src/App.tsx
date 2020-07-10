import React, {useState} from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import Rating, {RatingValueType} from "./components/Rating/Rating";
import UncontroledOnOff from "./components/UncuntrolledOnOfF/UncontrolledOnOff";
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";
import UncontrolledRating from './components/Rating/UncontrolledRating';
import {OnOff} from './components/OnOfF/OnOff';

function App() {
    console.log('Rendering App');

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);

    const [accordionCollapsed, setAccordionCollapsed] = useState(false);

    const [on, setOn] = useState(false);



    const onCollapsedChange = () => {
        setAccordionCollapsed(!accordionCollapsed)
    }

    const  onOnChanged = (on: boolean) => {
        setOn(on)
    }



    return (
        <div className="App">
       {/*     <PageTitle title={'This is App component'}/>
            <PageTitle title={'My friends'}/>
            <Rating value={3}/>
            <Accordion titleValue={'Menu'} collapsed={true}/>
            <Accordion titleValue={'Users'} collapsed={false}/>

            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}

            <UncontroledOnOff/>
            <OnOff  on={on}
                    onOnChanged={onOnChanged} />
            <Accordion titleValue={'Menu'}
                       accordionCollapsed={accordionCollapsed}
                       onCollapsedChange={onCollapsedChange}
            />
            <UncontrolledAccordion titleValue={'menu'}/>
            <UncontrolledRating/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('Rendering PageTitle');
    return (
        <h1>{props.title}</h1>
    );
}


export default App;
