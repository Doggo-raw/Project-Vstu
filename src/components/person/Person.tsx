import React from 'react';
import styles from './Person.module.css';
import dmitry from '../../../src/assets/Decanat/dmitry.png'


const Person = (props: any) => {
    return (
        <div className={styles.wrapper}>


            <div className={styles.placeTop}>
                <div className={styles.bg}>
                    <div className={styles.shape}>
                        <img src={dmitry} alt=""/>
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

export default Person;