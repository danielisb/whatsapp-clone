import React from 'react';
import './App.css';
import SideBar from './Sidebar';
import Chat from './Chat';

function App() {
  return (
    // BEM naming convention
    <div className="app">
      <div className="app_body">
        <SideBar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
