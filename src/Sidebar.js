import { Avatar, IconButton } from "@material-ui/core";
import { Chat, DonutLargeRounded, MoreVert, SearchOutlined } from "@material-ui/icons";
import React from "react";
import './Sidebar.css'
import SidebarChat from './SibebarChat'

function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar/>
                <div className="sidebar_headerRight">
                    <IconButton>
                        <DonutLargeRounded/>
                    </IconButton>
                    
                    <IconButton>
                        <Chat/>
                    </IconButton>
                    
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>
            </div>

            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                    <SearchOutlined/>
                    <input placeholder="Search or start new chat" type="text"/>
                </div>
            </div>

            <div className="sidebar_chats">
                <SidebarChat addNewChat />
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>            
            </div>
        </div>
    );
}

export default SideBar