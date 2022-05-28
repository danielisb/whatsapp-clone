import React from "react";
import './ChatIntro.css';

export default () => {
    return (
        <div className="chatIntro">
            <img className="phoneConnection" src="https://whatsapp-clone-web.netlify.app/static/media/intro-connection-light.5690d473.jpg" alt="" />
            <h1>WhatsApp for Desktop</h1>
            <h2>Now send and receive messages without keeping your phone online.
                <br/>
                Use whatsApp on up to 4 linked devices and 1 phone at the same time.
            </h2>
        </div>
    )
}