import React from 'react'
import './Sidebar.css';
import Avatar from '@mui/material/Avatar';

import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import { SidebarChat } from '../sidebarchat/SidebarChat';

export const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="sidebar__header">
            <Avatar src="https://avatars.dicebear.com/api/human/f1223m09.svg"/>
            <div className="sidebar__headerRight">
                <IconButton>
                    <DonutLargeIcon/>
                </IconButton>
                <IconButton>
                    <ChatIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
               
            </div>
        </div>
        <div className="sidebar__search">
            <div className="sidebar__searchContainer">
                <SearchIcon/>
                <input placeholder="Search or start new chat"/>
            </div>
        </div>
        <div className="sidebar__chats">
            <SidebarChat src="123aesff"/>
            <SidebarChat src="123a2sff"/>
            <SidebarChat src="123a4sff"/>
            <SidebarChat src="123ashj5ff"/>
            <SidebarChat src="123asds5ff"/>
            <SidebarChat src="123asvb5ff"/>
            <SidebarChat src="123asf5ff"/>
            <SidebarChat src="123ads5ff"/>
            <SidebarChat src="123as5sdgff"/>
            <SidebarChat src="123asre5ff"/>
            <SidebarChat src="123ash5ff"/>
            <SidebarChat src="123ass5ff"/>
            <SidebarChat src="123ahs5ff"/>
            <SidebarChat src="123as15ff"/>
            <SidebarChat src="123as55ff"/>
            <SidebarChat src="123a4s5ff"/>
            <SidebarChat src="123a3s5ff"/>
        </div>
    </div>
  )
}
