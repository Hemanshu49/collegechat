import React from 'react'
import Dash from './Dash'
import "../css/page.css"
// import Main from "../main"

export default function page() {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-auto' id='maindiv'>
            {/* {<Main/>} */}
            {<Dash />}
            <div className='col-auto' id='chatpart'>
              <h1>this is Chat part </h1>
            </div>
            <div className='col-auto' id='mespart'>
              <h2>MEssage part</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
