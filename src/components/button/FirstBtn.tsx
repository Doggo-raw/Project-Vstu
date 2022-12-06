import React from 'react';
import Button from '@mui/material/Button';
import '@fontsource/roboto/400.css';


const FirstBtn = () => {
    return (
        <div>
            <Button variant="outlined" size='large' color='error' className=".MuiButton-outlinedSizeLarge" >Hello World</Button>
        </div>
    );
};

export default FirstBtn;