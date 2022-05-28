import React from 'react';
import './Login.css'
import Api from '../Api';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({onReceive}) => {
    const handleGoogleLogin = async () => {
        let result = await Api.gooPopup();
        if(result) {
            onReceive(result.user);
        } else {
            alert("Erro!");
        }
    }
    return (
        <div className='login'>
            <button onClick={handleGoogleLogin}>Login with Google</button>
        </div>
    );
}