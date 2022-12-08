import React from 'react';
import SplitLine from "../../../../components/splitLine/SplitLine";
import styles from './Payment.module.css';
import Modal from '../../../../components/modal/ModalConstruct';
import Chip from "@mui/material/Chip";
import {LocalPhone} from "@mui/icons-material";

const Payment = () => {



    return (
        <div className={styles.wrapper}>
            <SplitLine text="Оплата за обучение"/>

            <Modal btn_text="Важная информация - коды платежей"
                   header_in_modal="Весенне-летняя сессия будет проходить:"
                   text_in_modal={<Chip label="Clickable" variant="outlined" />
                   }
            />
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