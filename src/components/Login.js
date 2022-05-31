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
            <div className='login--container'>
                <img src='https://marcas-logos.net/wp-content/uploads/2020/03/WHATSAPP-LOGO.png'
                     alt=''
                />
                
                <div className='login--text'>
                    <h2>Welcome to WhatsApp</h2>
                </div>
                    <button onClick={handleGoogleLogin}>
                        Sign In With Google
                    </button>

                    <div className='logoGmail'>
                            <img src='https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-2-1.png'
                                alt=''
                            />
                    </div>
            </div>
        </div>
    );
}