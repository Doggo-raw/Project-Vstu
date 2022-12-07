import React from 'react';
import styles from './SplitLine.module.css';


const SplitLine = (props: any) => {
    return (
        <div className={styles.line}>{props.text}</div>
    );
};

export default SplitLine;