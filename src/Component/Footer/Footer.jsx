import React from 'react'
import '../../main.css'
import './Footer.css'
import { FaLinkedin, FaTwitter, FaGithub, FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="social_media">
                <div className="footer_heading"><h2>Connect With Me</h2></div>
                <div className="icons">
                    <div className="icon">
                        <a target="_blank" href="https://www.linkedin.com/in/zainaly"><FaLinkedin /></a>
                        <label htmlFor="">LinkedIn</label>
                    </div>
                    <div className="icon">
                        <a target="_blank" href="https://www.github.com/zainaly0"><FaGithub /></a>
                        <label htmlFor="">Github</label>
                    </div>
                    <div className="icon">
                        <a target="_blank" href="https://www.youtube.com/@zainaly_"><FaYoutube /></a>
                        <label htmlFor="">Youtube</label>
                    </div>
                    <div className="icon">
                        <a target="_blank" href="https://www.twitter.com/zainaly_"><FaTwitter /></a>
                        <label htmlFor="">Twitter</label>
                    </div>
                    <div className="icon">
                        <a target="_blank" href="https://www.instagram.com/zainaly_"><FaInstagram /></a>
                        <label htmlFor="">Instagram</label>
                    </div>
                    <div className="icon">
                        <a target="_blank" href="https://www.facebook.com/zainaly0"><FaFacebook /></a>
                        <label htmlFor="">Facebook</label>
                    </div>

                </div>
            </footer>
 
  )
}

export default Footer
