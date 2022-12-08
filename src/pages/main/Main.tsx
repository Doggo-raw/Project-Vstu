import Button from '@mui/material/Button';
import React from 'react';
import styles from './Main.module.css';
import News from "../news/News";
import AboutShort from "../aboutShort/AboutShort";
import Advantages from "../advantages/Advantages";
import {Link} from 'react-router-dom';
import Library from "../headerPages/library/Library";
import Incoming from "../headerPages/incoming/Incoming";



const Main = () => {
    return (
<div>

        <div className={styles.background}>
            <div className={styles.text_plate}>
                <div className={styles.text_wrapper}>
                    <h2>Факультет подготовки инженерных кадров</h2>
                    <p>Обучение по удобным форматам!</p>

                <Link to="/direct">
                    <Button variant="contained">Выбрать направление</Button>
                </Link>

                </div>

            </div>

        </div>

    <News/>

    <AboutShort/>


    <Advantages/>


    {/*<Library/>*/}

    <Incoming/>

</div>
    );
};

export default Main;