import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Directions from "./pages/directions/Directions";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <App />
        </React.StrictMode>

        {/*<Routes>*/}
        {/*    <Route path={'/specialties'} element={<Directions />} />*/}
        {/*</Routes>*/}

    </BrowserRouter>


);


reportWebVitals();
