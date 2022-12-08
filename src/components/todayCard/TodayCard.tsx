import React from 'react';
import styles from './TodayCard.module.css';

const TodayCard = (props: any) => {
    return (
        <div className={styles.wrapper}>

            <div className={styles.card}>
                <p className={styles.topNumber}>{props.num}</p>
                <p className={styles.bottomText}>{props.text}</p>
            </div>


        </div>
    );
};

export default TodayCard;