import React from 'react';
import './ChatListItem.css';

export default ({onClick, active, data}) => {
    return (
        <div className={`chatListItem ${active ? 'active' : ''}`}
             onClick={onClick}
        >
            <img className='chatListItem--avatar' src={data.image} alt='' />
            <div className='chatListItem--lines'>
                <div className='chatListItem--line'>
                    <div className='chatListItem--name'>{data.title}</div>
                    <div className='chatListItem--date'>06:14</div>
                </div>

                <div className='chatListItem--lastMsg'>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                </div>
            </div>
        </div>
    );
}