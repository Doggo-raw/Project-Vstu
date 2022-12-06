import Button from '@mui/material/Button';
import React from 'react';
import styles from './Main.module.css';
import News from "../news/News";


const Main = () => {
    return (
<div>

        <div className={styles.back}>
            <div className={styles.dark}>
                <div className={styles.text_wrapper}>
                    <h2>Факультет подготовки инженерных кадров</h2>
                    <p>Обучение по удобным форматам!</p>
                    <Button variant="contained">Выбрать направление</Button>
                </div>
            </div>




        </div>
    <News/>
</div>
    );
};

export default Main;