import React from 'react';
import styles from './News.module.css';
import MultiActionAreaCard from "../../components/post/Post";
import SplitLine from "../../components/splitLine/SplitLine";


const News = () => {
    return (
        <div>

            <SplitLine text="Новости факультета"/>

            <div className={styles.posts}>
                <MultiActionAreaCard/>
                <MultiActionAreaCard/>
                <MultiActionAreaCard/>
                <MultiActionAreaCard/>






            </div>
        </div>
    );
};

export default News;