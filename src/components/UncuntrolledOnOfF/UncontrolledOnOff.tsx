import React, {useState} from "react";
import styles from './UncontrolledOnOff.module.css'

type OnOfPropsType = {}

function UncontrolledOnOffWithoutMemo(props: OnOfPropsType) {

    const [on, setOn] = useState(true);


    const onStyle = on ? styles.on + ' ' + styles.backgroundGreen : styles.on;
    const offStyle = on ? styles.off : styles.on + ' ' + styles.backgroundRed;
    const indicatorStyle = on ? styles.indicator + ' ' + styles.backgroundGreen : styles.indicator + ' ' + styles.backgroundRed;


    return (
        <div>
            <h3>Uncontrolled OnOff</h3>
            <div className={styles.onOffWrapper}>
                <div className={onStyle} onClick={() => setOn(true)}>
                    ON
                </div>
                <div className={offStyle} onClick={() => setOn(false)}>
                    OFF
                </div>
                <div className={indicatorStyle}>

                </div>
            </div>
        </div>
    )
}

export const UncontrolledOnOff = React.memo(UncontrolledOnOffWithoutMemo)

