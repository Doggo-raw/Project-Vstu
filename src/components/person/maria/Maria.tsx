import React from 'react';
import maria from '../../../assets/Decanat/maria.png';
import styles from "../Person.module.css";


const Maria = (props: any) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.placeMiddle}>

                <div className={styles.bg}>
                    <div className={styles.shape2}>
                        <img src={maria} alt=""/>
                        <div className={styles.specText}>
                            <h4>{props.name}</h4>
                            <div>{props.post}</div>
                            <div>{props.place}</div>
                            <div>{props.phone}</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Maria;