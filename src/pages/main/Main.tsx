import Button from '@mui/material/Button';
import React from 'react';
import styles from './Main.module.css';
import News from "../news/News";
import AboutShort from "../aboutShort/AboutShort";
import Advantages from "../advantages/Advantages";
import {Link, Route, Routes} from 'react-router-dom';
import Directions from "../directions/Directions";
import Payment from "../headerPages/services/payment/Payment";


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



            <Routes>
                <Route path="/direct" element={<Directions/>}></Route>
            </Routes>

        </div>

    <News/>

    <AboutShort/>


    <Advantages/>

    <Payment/>

</div>
    );
};

export default Main;