import React from 'react'
import Header from '../Header/Header'
import './Urdu.css'
import blackFlag from '../../assets/blackflag.jpg'
import whiteFlag from '../../assets/whiteflag.jpg'

const Urdu = () => {
  return (<>
    <header>
      <Header />
    </header>


    <div
      className="container"
      style={{ backgroundColor: "black", color: "white" }}
    >
      <div className="urdu__container">
        <div className='name_flag'>
          <img className='flag' src={blackFlag} alt="" />
          <h1>ملا زین مجاہد</h1>
          <img className='flag' src={whiteFlag} alt="" />
        </div>
        <h5>free hokr pura krunga is page ko </h5>
        <h5>busy in study...</h5>
        <h5>will be complete soon..</h5>
      </div>


    </div>

  </>
  )
}

export default Urdu
