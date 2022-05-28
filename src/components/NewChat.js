import React, { useState } from 'react';
import './NewChat.css'

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({user, chatList, show, setShow}) => {
    const [list, setList] = useState([
        {id: 1, avatar: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png', name: 'Penny'},
        {id: 2, avatar: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png', name: 'Florence'},
        {id: 3, avatar: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png', name: 'Danny'},
        {id: 4, avatar: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png', name: 'Mike'},
        {id: 5, avatar: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png', name: 'Kevin'},
        {id: 6, avatar: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png', name: 'Russah'},
        {id: 7, avatar: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png', name: 'Devyn'},
        {id: 8, avatar: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png', name: 'Mary'},
        {id: 9, avatar: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png', name: 'Chris'}
    ]);

    const handleClose = () => {
        setShow(false);
    }

    return (
        <div className='newChat' style={{left: show ? 0 : -415}}>
            <div className='newChat--head'>
            <div onClick={handleClose} className='newChat--backbutton'>
                <ArrowBackIcon style={{color: '#fff'}} />
            </div>
            <div className='newChat--headtitle'>Start New Chat</div>
            </div>
            <div className='newChat--list'>
                {list.map((item, key) => (
                    <div className='newChat--item' key={key}>
                        <img className='newChat--itemavatar' src={item.avatar} alt='' />
                        <div className='newChat--itemname'>{item.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}