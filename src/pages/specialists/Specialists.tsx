import React from 'react';
import styles from './Specialists.module.css';
import SplitLine from "../../components/splitLine/SplitLine";
import Person from "../../components/person/Person";
import Maria from "../../components/person/maria/Maria";


const Specialists = () => {
    return (
        <div className={styles.wrapper}>
            <SplitLine text="Деканат факультета"/>


            <Person name="Гурулёв Дмитрий Николаевич" post="декан, к.т.н., доцент" place="корпус ВГТЗ, ауд. 215" phone="тел. 8 (8442) 74-05-61"/>
            <Maria name="Кузьмина Мария Игоревна" post="заместитель декана, к.э.н., доцент" place="корпус ВГТЗ, ауд. 215" phone="тел. 8 (8442) 74-05-61"/>

        </div>
    );
};

export default Specialists;