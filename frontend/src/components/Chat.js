import React, { useEffect , useState} from 'react'
// import Dash from './Dash'
import './myChat.css';
import axios from 'axios';
import { useChatState } from '../context/ChatProvider';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
import SearchIcon from '@mui/icons-material/Search';
import ConversationItem from '../pages/ConversationsItem';

const Chat = () => {
// const [chats , setChats] = useState([]) ;
//   const fetchChats = async() => {
//     const response = await axios.get('/api/chat');
//     const data = response.data;

//     setChats(data) ;
//    // console.log(data);
//   };
// // const fetchChats = async () => {
// //   try {
// //     const response = await axios.get('/api/chat');
// //     const responseData = response.data;

// //     // Assuming responseData is an array or an object with a property named 'chats'
// //     if (Array.isArray(responseData) || (responseData && responseData.chats)) {
// //       setChats(responseData.chats || responseData);
// //       setMsg(responseData.chats || responseData);
// //     } else {
// //       console.error('Invalid data structure received from the server');
// //     }
// //   } catch (error) {
// //     console.error('Error fetching chats:', error);
// //   }
// // };
// useEffect(() => {
//   fetchChats()
// },[])
const [conversation , setConversation] = useState([
  {
    name : "hemanshu",
    message : "Hey how are you?",
    timestamp:"today",
  },
  {
    name : "you" ,
    message : "I am good thanks.",
    timestamp:"10 min ago"
  },
]);

  return (
    
    <div className='chatspace'>
      {/* {chats.map ((chat) =>{
        return(
      <div key={chat._id}>{chat.chatName}</div>)})} */}
      {/* <h1>THis is chat side</h1> */}
      <div className='sb-header'>
      <div>  
        <IconButton>
        <AccountCircleIcon/>
        </IconButton>
      </div>

      <div>
        <IconButton>
          <PersonAddIcon/> 
        </IconButton>
        <IconButton>
          <GroupAddIcon/>
        </IconButton>
        <IconButton>
          <AddCircleIcon/>
        </IconButton>
        <IconButton>
          <NightlightIcon/>
        </IconButton>
        </div>
        </div>
      <div className='sb-search'>
       <IconButton>
        <SearchIcon/>
        </IconButton>
        <input placeholder='search' className='search-box'/>
      </div>
      <div className='sb-conversation'>
        
       {conversation.map((conversation) =>{
        return <ConversationItem props={conversation}/>
       })}
        
        </div>


    </div>
  )
}

export default Chat
