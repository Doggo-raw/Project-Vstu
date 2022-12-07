import React from 'react';
import styles from './TodayCard.module.css';

const TodayCard = (props: any) => {
    return (
        <div className={styles.wrapper}>

            <div className={styles.card}>
                <div className={styles.topNumber}>{props.num}</div>
                <div className={styles.bottomText}>{props.text}</div>
            </div>


        </div>
    );
};

export default TodayCard;