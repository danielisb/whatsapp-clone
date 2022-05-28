import React, { useEffect, useState, useRef } from "react";
import './ChatWindow.css';
import EmojiPicker from "emoji-picker-react";
import MessageItem from "./MessageItem";

import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import MicIcon from '@mui/icons-material/Mic';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({user}) => {
    const body = useRef();

    let recognition = null;
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if(SpeechRecognition !== undefined) {
        recognition = new SpeechRecognition();
    }

    const [emojiOpen, setEmojiOpen] = useState(false);
    const [text, setText] = useState('');
    const [listening, setListening] = useState(false);
    const [list, setList] = useState([
        {author: 123, body: 'It has survived not only five centuries'},
        {author: 123, body: 'but also the leap into electronic typesetting, remaining essentially unchanged'},
        {author: 1234, body: 'remaining essentially unchanged'},
        {author: 1234, body: 'It is a long established fact that the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.'},
        {author: 123, body: 'It has survived not only five centuries'},
        {author: 123, body: 'but also the leap into electronic typesetting, remaining essentially unchanged'},
        {author: 1234, body: 'remaining essentially unchanged'},
        {author: 1234, body: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable.'},
        {author: 123, body: 'It has survived not only five centuries'},
        {author: 123, body: 'but also the leap into electronic typesetting, remaining essentially unchanged'},
        {author: 1234, body: 'remaining essentially unchanged'},
        {author: 1234, body: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.'},
        {author: 123, body: 'It has survived not only five centuries'},
        {author: 123, body: 'but also the leap into electronic typesetting, remaining essentially unchanged'},
        {author: 1234, body: 'remaining essentially unchanged'},
        {author: 1234, body: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.'},
        {author: 123, body: 'It has survived not only five centuries'},
        {author: 123, body: 'but also the leap into electronic typesetting, remaining essentially unchanged'},
        {author: 1234, body: 'remaining essentially unchanged'},
        {author: 1234, body: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here..'},
        {author: 123, body: 'It has survived not only five centuries'},
        {author: 123, body: 'but also the leap into electronic typesetting, remaining essentially unchanged'},
        {author: 1234, body: 'remaining essentially unchanged'},
        {author: 1234, body: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.'},
    ]);

    useEffect(() => {
        if(body.current.scrollHeight > body.current.offsetHeight) {
            body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight;
        }
    }, [list]);

    const handleEmojiClick = (e, emojiObject) => {
        setText(text + emojiObject.emoji);
    }

    const handleOpenEmoji = () => {
        setEmojiOpen(true);
    }
    
    const handleCloseEmoji = () => {
        setEmojiOpen(false);
    }

    const handleMicClick = () => {
        if(recognition !== null) {
            recognition.onstart = () => {
                setListening(true);
            }

            recognition.onend = () => {
                setListening(false);
            }

            recognition.result = (e) => {
                setText(e.results[0][0].transcript);
            }

            recognition.start();
        }
    }
    
    const handleSendClick = () => {
    }

    return (
        <div className="chatWindow">
            <div className="chatWindow--header">
                <div className="chatWindow--headerinfo">
                    <img className="chatWindow--avatar" src='https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png' alt="" />
                    <div className="chatWindow--name"> Daniel</div>
                </div>

                <div className="chatWindow--headerbuttons">

                    <div className="chatWindow--btn">
                        <SearchIcon style={{color: '#919191'}} />
                    </div>
                    <div className="chatWindow--btn">
                        <AttachFileIcon style={{color: '#919191'}} />
                    </div>
                    <div className="chatWindow--btn">
                        <MoreVertIcon style={{color: '#919191'}} />
                    </div>

                </div>

            </div>

            <div ref={body} className="chatWindow--body">
                {list.map((item, key) => (
                    <MessageItem
                        key={key}
                        data={item}
                        user={user}
                    />
                ))}
            </div>

            <div className="chatWindow--emojiarea"
                 style={{height: emojiOpen ? '200px' : '0px'}}
            >
                <EmojiPicker
                    onEmojiClick={handleEmojiClick}
                    disableSearchBar
                    disableSkinTonePicker
                    pickerStyle={{ width: '100%' }}
                />
            </div>

            <div className="chatWindow--footer">
                
                <div className="chatWindow--pre">
                    <div className="chatWindow--btn"
                         onClick={handleCloseEmoji}
                         style={{width: emojiOpen ? 40 : 0}}
                    >
                        <CloseIcon style={{color: '#919191'}} />
                    </div>

                    <div className="chatWindow--btn"
                         onClick={handleOpenEmoji}
                    >
                        <InsertEmoticonIcon style={{color: emojiOpen ? '#009688' : '#919191'}} />
                    </div>
                </div>
                
                <div className="chatWindow--inputarea">
                    <input className="chatWindow--input"
                           type="text"
                           placeholder="Type a message"
                           value={text}
                           onChange={e => setText(e.target.value)}
                    />
                </div>
                
                <div className="chatWindow--pos">
                    {text === '' &&
                        <div onClick={handleMicClick} className="chatWindow--btn">
                            <MicIcon style={{color: listening ? '#126ece' : '#919191'}} />
                        </div>
                    }

                    {text !== '' &&
                        <div onClick={handleSendClick} className="chatWindow--btn">
                            <SendIcon style={{color: '#919191'}} />
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}