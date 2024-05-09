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
          {/* <h1>ملا زین مجاہد</h1> */}
          <div className="heading">
          <h1>ISLAM</h1>
          <h3>Mullah Zain Mujahid</h3>
          </div>
          <img className='flag' src={whiteFlag} alt="" />
        </div>
        <h5>busy in job && study...</h5>
        <h5>complete will be soon..</h5>
      </div>


    </div>

  </>
  )
}

export default Urdu
