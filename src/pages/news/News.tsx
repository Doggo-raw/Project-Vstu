import React from 'react';
import styles from './News.module.css';
import MultiActionAreaCard from "../../components/post/Post";
import SplitLine from "../../components/splitLine/SplitLine";
import NewsPagination from "../../components/pagination/NewsPagination";


const News = () => {
    return (
        <div className={styles.wrapper}>

            <SplitLine text="Новости факультета"/>

            <div className={styles.posts}>
                <MultiActionAreaCard/>
                <MultiActionAreaCard/>
                <MultiActionAreaCard/>
                <MultiActionAreaCard/>
            </div>
            <NewsPagination />

        </div>
    );
};

export default News;