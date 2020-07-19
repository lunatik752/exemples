import React, {useState} from "react";
import {RatingValueType} from "./Rating";

type UncontrolledRatingPropsType = {
    defaultValue?: RatingValueType,
    onChange?: (value: RatingValueType) => void
}

function UncontrolledRatingWithoutMemo(props: UncontrolledRatingPropsType) {

    const [value, setValue] = useState(0)


    return (
        <div>
            <Star selected={value > 0} setValue={setValue} value={1}/>
            <Star selected={value > 1} setValue={setValue} value={2}/>
            <Star selected={value > 2} setValue={setValue} value={3}/>
            <Star selected={value > 3} setValue={setValue} value={4}/>
            <Star selected={value > 4} setValue={setValue} value={5}/>
        </div>)
}

type StarPropsType = {
    selected: boolean,
    value: 1 | 2 | 3 | 4 | 5,
    setValue: (value: 1 | 2 | 3 | 4 | 5) => void,
    onChange?: (value: RatingValueType) => void

}

export const UncontrolledRating = React.memo(UncontrolledRatingWithoutMemo)

function StarWithoutMemo(props: StarPropsType) {

    const onSpanClick = () => {props.setValue(props.value); }

    return (
        <span onClick={onSpanClick}>
            {props.selected ? <b>star </b> : 'star '}
        </span>
    )
}

const Star = React.memo(StarWithoutMemo)