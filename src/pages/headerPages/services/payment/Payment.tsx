import React from 'react';
import SplitLine from "../../../../components/splitLine/SplitLine";
import styles from './Payment.module.css';



const Payment = () => {
    return (
        <div className={styles.wrapper}>
            <SplitLine text="Оплата за обучение"/>


            <h2>Важная информация - коды платежей</h2>

            <div className={styles.centerBlock}>

                <div className={styles.educationForm}>
                    <h3>Полная форма обучения (5 лет)</h3>
                    <p>Код платежа 34</p>
                </div>



                <div className={styles.educationForm}>
                    <h3>Сокращенная форма обучения (3,5 года)</h3>
                    <p>Код платежа 53(ФПИК)</p>
                </div>

            </div>



        </div>
    );
};

export default Payment;