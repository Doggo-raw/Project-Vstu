import React from 'react';
import SplitLine from "../../components/splitLine/SplitLine";
import {Button} from "@mui/material";
import styles from './AboutShort.module.css';
import TodayCard from "../../components/todayCard/TodayCard";
import {Link, Route, Routes} from 'react-router-dom';
import History from "../history/History";

const AboutShort = () => {
    return (
        <div>
            <SplitLine text="О факультете"/>

            <div className={styles.wrapper}>
                <p className={styles.text}>
                    Факультет подготовки инженерных кадров образован в мае 1995 г.
                    путем объединения вечернего тракторозаводского и заочного факультетов.
                    На факультете сосредоточена подготовка специалистов с высшим образованием
                    по вечерней и заочной формам обучения.
                </p>
                <div>
                    <Link to="/history">
                        <Button variant="contained">Подробнее о истории факультета</Button>
                    </Link>
                </div>
            </div>

            <div className={styles.second_block}>

            <h2>ФПИК сегодня - это:</h2>


                <div className={styles.cards}>

                    <TodayCard num="14" text="Направлений подготовки бакалавриата и магистратуры"/>
                    <TodayCard num=">2500" text="Студентов обучается"/>
                    <TodayCard num=">25000" text="Выпускников"/>

                </div>


            </div>

            <Routes>
                <Route path="/history" element={<History/>}/>
            </Routes>

        </div>
    );
};

export default AboutShort;