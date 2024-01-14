import React from 'react'
import "./myChat.css";
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Message = ({props}) => {
  return (
    <div className='chatArea-container'>
        <div className='chatArea-header'>
            chatArea- header
            {/* <p className='con-item'>{props.name[0]}</p> */}
            {/* <div className='header-text'>
                <p className='con-title'>{props.name}</p>
                <p className='con-timeStamp'>{props.timestamp}</p>
            </div> */}
            <IconButton>
                <DeleteIcon/>
            </IconButton>
            </div>
        <div className='message-container'>Message conainter</div>
        <div className='text-input-area'>text-input-area</div>

    </div>
  )
}

export default Message
