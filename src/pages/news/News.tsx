import React from 'react';
import styles from './News.module.css';
import MultiActionAreaCard from "../../components/post/Post";


const News = () => {
    return (
        <div>

            <div className={styles.header}></div>


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