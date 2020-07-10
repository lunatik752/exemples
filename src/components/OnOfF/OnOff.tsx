import React, {useState} from "react";
import styles from './OnOff.module.css'

type OnOfPropsType = {

}

function OnOff(props: OnOfPropsType) {

    const [on, setOn] = useState(true);

    const onOnClick = () => {
        setOn(true)
    }

       const onOffClick = () => {
           setOn(false)
    }


    const onStyle = on ? styles.on + ' ' + styles.backgroundGreen : styles.on;
    const offStyle = on ? styles.off : styles.on + ' ' + styles.backgroundRed;
    const indicatorStyle = on ? styles.indicator + ' ' + styles.backgroundGreen : styles.indicator + ' ' + styles.backgroundRed;


    return (
        <div className={styles.onOffWrapper}>
            <div className={onStyle} onClick={onOnClick}>
                ON
            </div>
            <div className={offStyle} onClick={onOffClick}>
                OFF
            </div>
            <div className={indicatorStyle}>

            </div>
        </div>)
}


export default OnOff;