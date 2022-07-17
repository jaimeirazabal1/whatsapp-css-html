import React from 'react'
import './SidebarChat.css';
import Avatar from '@mui/material/Avatar';

export const SidebarChat = ({src}) => {
  return (
    <div className="sidebarChat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${src}.svg`} />
        <div className="sidebarChat__info">
            <h2>Room Name</h2>
            <p>Last Message...</p>
        </div>
    </div>
  )
}
    