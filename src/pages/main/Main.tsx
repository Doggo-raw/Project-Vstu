import Button from '@mui/material/Button';
import React from 'react';
import styles from './Main.module.css';
import News from "../news/News";
import AboutShort from "../aboutShort/AboutShort";
import Advantages from "../advantages/Advantages";


const Main = () => {
    return (
<div>

        <div className={styles.background}>
            <div className={styles.text_plate}>
                <div className={styles.text_wrapper}>
                    <h2>Факультет подготовки инженерных кадров</h2>
                    <p>Обучение по удобным форматам!</p>
                    <Button variant="contained">Выбрать направление</Button>
                </div>
            </div>




        </div>

    <News/>

    <AboutShort/>

    <Advantages/>

</div>
    );
};

export default Main;