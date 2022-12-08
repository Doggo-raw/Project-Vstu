import React from 'react';
import Post from '../../components/post/Post';
import SplitLine from "../../components/splitLine/SplitLine";
import styles from './Advantages.module.css';


const Advantages = () => {
    return (
        <div>
            <SplitLine text="Преимущества обучения"/>


            <div className={styles.wrapper}>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>


        </div>
    );
};

export default Advantages;