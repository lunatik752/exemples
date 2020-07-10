import React from "react";
import styles from './OnOff.module.css'

type OnOfPropsType = {
    on: boolean,
    onOnChanged: (on: boolean) => void

}

export function OnOff(props: OnOfPropsType) {

    const onStyle = props.on ? styles.on + ' ' + styles.backgroundGreen : styles.on;
    const offStyle = props.on ? styles.off : styles.on + ' ' + styles.backgroundRed;
    const indicatorStyle = props.on ? styles.indicator + ' ' + styles.backgroundGreen : styles.indicator + ' ' + styles.backgroundRed;


    return (
        <div>
            <h3>Controlled OnOff</h3>
            <div className={styles.onOffWrapper}>
                <div className={onStyle} onClick={() => {props.onOnChanged(true)}}>
                    ON
                </div>
                <div className={offStyle} onClick={() => {props.onOnChanged(false)}}>
                    OFF
                </div>
                <div className={indicatorStyle}>

                </div>
            </div>
        </div>)
}
