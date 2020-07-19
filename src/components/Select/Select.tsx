import React, {useState, KeyboardEvent, useEffect} from "react";
import styles from './Select.module.css'

type ItemType = {
    title: string,
    value: any
}

type SelectPropsType = {
    value?: any,
    onChange: (value: any) => void,
    items: ItemType[]
}

function SelectWithoutMemo(props: SelectPropsType) {

    const [activeClass, setActiveClass] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const selectClassName = styles.select + ' ' + (activeClass ? styles.active : '')

    const toggleItems = () => setActiveClass(!activeClass)

    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems()
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp')
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const nextElement = e.key === 'ArrowDown' ? props.items[i + 1] : props.items[i - 1]
                    if (nextElement) {
                        props.onChange(nextElement.value);
                        return;
                    }
                }
                if (!selectedItem) {
                    props.onChange(props.items[0].value)
                }
            }

        if (e.key === 'Enter' || e.key === 'Escape') {
            setActiveClass(false)
        }
    }


    return (
        <div className={selectClassName} onKeyUp={onKeyUp} tabIndex={0}>
            <span className={styles.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
            <div className={styles.items}>
                {props.items.map(i => <div key={i.value}
                                           onMouseEnter={() => setHoveredElementValue(i.value)}
                                           className={styles.item + ' ' + (hoveredItem === i ? styles.selected : '')}
                                           onClick={() => onItemClick(i.value)}
                >{i.title}</div>)}
            </div>
        </div>
    )
}


export const Select = React.memo(SelectWithoutMemo)