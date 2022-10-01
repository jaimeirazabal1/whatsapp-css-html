import React from 'react'
import './Chat.css';
import Avatar from '@mui/material/Avatar';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import MicIcon from '@mui/icons-material/Mic';
export const Chat = ({src}) => {
  return (
    <div className="chat">
        <div className="chat__header">
            <Avatar src={`https://avatars.dicebear.com/api/human/${src}.svg`} />
            <div className="chat__headerInfo">
                <h3>Room name</h3>
                <p>Last seen at ...</p>
            </div>
            <div className="chat__headerRight">
                <IconButton>
                    <SearchIcon/>
                </IconButton>
                <IconButton>
                    <AttachFileIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
            </div>
        </div>
        <div className="chat__body">
            <p className="chat__message">Hola Jaime
                <span className="chat__name">Karen Ariza</span>
                <span className="chat__timestamp">3:52pm</span>
            </p>
            <p className="chat__message chat__reciever">Hola Karen
                <span className="chat__name">Jaime Irazabal</span>
                <span className="chat__timestamp">3:53pm</span>
            </p>
            <p className="chat__message chat__reciever">Hola Karen
                <span className="chat__name">Jaime Irazabal</span>
                <span className="chat__timestamp">3:53pm</span>
            </p>
            <p className="chat__message chat__reciever">Hola Karen
                <span className="chat__name">Jaime Irazabal</span>
                <span className="chat__timestamp">3:53pm</span>
            </p>
            <p className="chat__message chat__reciever">Hola Karen
                <span className="chat__name">Jaime Irazabal</span>
                <span className="chat__timestamp">3:53pm</span>
            </p>
            <p className="chat__message chat__reciever">Hola Karen
                <span className="chat__name">Jaime Irazabal</span>
                <span className="chat__timestamp">3:53pm</span>
            </p>
            <p className="chat__message chat__reciever">Hola Karen
                <span className="chat__name">Jaime Irazabal</span>
                <span className="chat__timestamp">3:53pm</span>
            </p>
            <p className="chat__message chat__reciever">Hola Karen
                <span className="chat__name">Jaime Irazabal</span>
                <span className="chat__timestamp">3:53pm</span>
            </p>
            <p className="chat__message chat__reciever">Hola Karen
                <span className="chat__name">Jaime Irazabal</span>
                <span className="chat__timestamp">3:53pm</span>
            </p>
            <p className="chat__message chat__reciever">Hola Karen
                <span className="chat__name">Jaime Irazabal</span>
                <span className="chat__timestamp">3:53pm</span>
            </p>
            <p className="chat__message chat__reciever">Hola Karen
                <span className="chat__name">Jaime Irazabal</span>
                <span className="chat__timestamp">3:53pm</span>
            </p>
            <p className="chat__message chat__reciever">Hola Karen
                <span className="chat__name">Jaime Irazabal</span>
                <span className="chat__timestamp">3:53pm</span>
            </p>
            <p className="chat__message chat__reciever">Hola Karen
                <span className="chat__name">Jaime Irazabal</span>
                <span className="chat__timestamp">3:53pm</span>
            </p>
            <p className="chat__message chat__reciever">Hola Karen
                <span className="chat__name">Jaime Irazabal</span>
                <span className="chat__timestamp">3:53pm</span>
            </p>
            <p className="chat__message chat__reciever">Hola Karen
                <span className="chat__name">Jaime Irazabal</span>
                <span className="chat__timestamp">3:53pm</span>
            </p>
            <p className="chat__message chat__reciever">Hola Karen
                <span className="chat__name">Jaime Irazabal</span>
                <span className="chat__timestamp">3:53pm</span>
            </p>
            <p className="chat__message chat__reciever">Hola Karen
                <span className="chat__name">Jaime Irazabal</span>
                <span className="chat__timestamp">3:53pm</span>
            </p>
        </div>
        <div className="chat__footer">
            <IconButton>
                <EmojiEmotionsOutlinedIcon/>
            </IconButton>
            <form>
                <input type="text" placeholder="Type a message"/>
                <button type="submit">Send a Message</button>
            </form>
            <IconButton>
                <MicIcon/>
            </IconButton>
        </div>
    </div>
  )
}
