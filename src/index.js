import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import AES from './aes';
import TripleDES from './App';
import OTP from './otp';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <TripleDES />
        <AES />

        <OTP />


    </React.StrictMode>
);


reportWebVitals();
