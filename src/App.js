import React, { useState, useeffect } from 'react';
import './App.css';

import ChatListItem from './components/ChatListItem';
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow';
import NewChat from './components/NewChat';
import Login from './components/Login';

import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [chatList, setChatList] = useState([
    {chatId: 1, title: 'Gabriel', image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png'},
    {chatId: 2, title: 'Mike', image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png'},
    {chatId: 3, title: 'Kevin', image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png'},
    {chatId: 4, title: 'John', image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png'},
    {chatId: 5, title: 'Penny', image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png'},
    {chatId: 6, title: 'Ed', image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png'},
    {chatId: 7, title: 'Bro', image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png'},
    {chatId: 8, title: 'Joe', image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png'},
    {chatId: 9, title: 'Tom', image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png'},
    {chatId: 10, title: 'Donie', image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png'},
    {chatId: 11, title: 'Chris', image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png'}
  ]);

  const [activeChat, setActiveChat] = useState({});
  const [user, setUser] = useState({
    id: 1234,
    avatar: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
    name: 'Daniel Lisboa'
  });
  const [showNewChat, setShowNewChat] = useState(false);
  const handleNewChat = () => {
    setShowNewChat(true);
  }

  const handleLoginData = async (u) => {
    let newUser = {
      id: u.uid,
      name: u.displayName,
      avatar: u.photoURL
    }
    //
    setUser(newUser);
  }

  if(user === null) {
    return (<Login onReceive={handleLoginData} />);
  }

  return (
    <div className='app-window'>
      <div className='sidebar'>
        <NewChat
          chatList={chatList}
          user={user}
          show={showNewChat}
          setShow={setShowNewChat}
        />
        <header>
          <img className='header--avatar'
               src={user.avatar}
               alt=''/>
          <div className='header--buttons'>
            <div className='header--btn'>
              <DonutLargeIcon style={{color: '#919191'}} />
            </div>
            <div onClick={handleNewChat} className='header--btn'>
              <ChatIcon style={{color: '#919191'}} />
            </div>
            <div className='header--btn'>
              <MoreVertIcon style={{color: '#919191'}} />
            </div>

          </div>
        </header>
        <div className='search'>
          <div className='search--input'>
            <SearchIcon fontSize='small' style={{color: '#919191'}} />
            <input type="search" placeholder="Search or start new chat" />
          </div>
        </div>

        <div className='chatlist'>
          {chatList.map((item, key) => (
            <ChatListItem
              key={key}
              data={item}
              active={activeChat.chatId === chatList[key].chatId}
              onClick={() => setActiveChat(chatList[key])}
            />
          ))}
        </div>
      </div>

      <div className='contentarea'>
        {activeChat.chatId !== undefined &&
          <ChatWindow
            user={user}
          />
        }
        {activeChat.chatId === undefined &&
          <ChatIntro />
        }
      </div>
    </div>
  );
}
