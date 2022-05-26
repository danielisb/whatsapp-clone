import React, { useEffect, useState } from 'react';
import "./Chat.css";
import { Avatar, Button, IconButton } from "@material-ui/core";
import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from "@material-ui/icons";

function Chat() {
    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, []);

    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

                <div className="chat_headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at ...</p>
                </div>

                <div className="chat_headerRight">
                    <IconButton> <SearchOutlined/> </IconButton>
                    <IconButton> <AttachFile/> </IconButton>
                    <IconButton> <MoreVert/> </IconButton>
                </div>
            </div>

            <div className="chat_body">
                <p className={`chat_message ${true && "chat_reciever"}`}>
                    <span className='chat_name'>Sonny Sangha</span>
                    Hey Guys
                    <span className='chat_timestamp'>3:52pm</span>
                </p>
            </div>

            <div className="chat_footer">
                <InsertEmoticon />
                <form>
                    <input placeholder='Type a message' type="text" />
                    <button type='submit'> Send a message </button>
                </form>
                <Mic />
            </div>
        </div>
    );
}

export default Chat