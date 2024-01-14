import React from 'react'
import Dash from '../components/Dash'
import './page.css'
import Chat from '../components/Chat'
import Message from '../components/Message'

export default function page() {
  return (
    <div>
      <div className='Sidenav'>
         {<Dash/>} 
        {<Chat/>}
        {<Message/>}
       
      </div>
    </div>
  )
}
