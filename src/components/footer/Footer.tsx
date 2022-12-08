import React from 'react';
import styles from './Footer.module.css';
import {Link, Route, Routes} from "react-router-dom";
import '../../App.css';

const Footer = () => {
    return (
        <div className={styles.wrapper}>

                {/*Довести до ума все это*/}

                <div className={styles.social}>
                    <Link to="/">
                        <div className="logoIco"></div>
                    </Link>

                    {/*переписать на пропсы*/}
                    <div>
                        <a href="">vk</a>
                        <a href="">tg</a>
                    </div>
                </div>

            <div className={styles.program}>
                <h3>Программы подготовки</h3>
                <Link to='/'>Формы и направления обучения</Link>
                <Link to='/'>Второе высшее</Link>
            </div>

            <ul className={styles.contacts}>
                <li>+7 8442 74-05-61</li>
                <li>+7 8442 29-29-34</li>
                <li>ул. Дегтярёва, 2.</li>
                <li>tfpic@vstu.ru</li>
            </ul>

            <ul>
                <li>Пн., Ср., Пт.: 8:30-17:00.</li>
                <li>Вт., Чт.: 8:30-18:30.</li>
                <li>Сб.: 10:00-14:00.</li>
                <li>Вс.: выходной.</li>
            </ul>





        </div>
    );
};

export default Footer;