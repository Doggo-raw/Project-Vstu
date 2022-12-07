import React from 'react';
import Post from '../../components/post/Post';
import styles from './Directions.module.css';
import SplitLine from "../../components/splitLine/SplitLine";



const Directions = () => {
    return (

        <div>
            <SplitLine text="directions"/>
            <div className={styles.wrapper}>



                <div>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                </div>


                <div>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                </div>

            </div>
        </div>


);
};

export default Directions;