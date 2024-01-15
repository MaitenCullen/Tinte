import React, { useContext, useState } from 'react'
import { db } from '../firebase/Firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { RiSendPlaneFill } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { GoLocation } from "react-icons/go";
import { useTranslation } from 'react-i18next';
import copaB from "/copaB.png"
import copaA from "/copaA.png"
import copaN from "/copaN.png"
import copaV from "/copaV.png"
import { ThemeContext } from '../App';
import { Button } from '../components/Button';





 export const Footer = () => {
  const [t, i18n] = useTranslation("global");
  const {theme} = useContext(ThemeContext);
  const style = { fontSize: "1.3em", margin:"15px" }
  const style2 = {  fontSize: "2em"}

  return (
    <section id="Footer">
    <div className="footer-container">
        <div className='div-lista'>
            <ul>
                <a>Servicios</a>
                <a>Nosotr@s</a>
                <a>Contactanos</a>
            </ul>
        </div>
            <div className='div-contact'>
                <ul className="contactList" id={theme}>
                <li className="listItem"><GoLocation className="icon-contact" style={style}/><span className="contact-text">Rosario, Argentina</span></li>
                <li className="listItem"><FaWhatsapp style={style}/><span className="contact-text">+54(341)15-3540307</span></li>          
                <li className="listItem"><HiOutlineMail style={style}/><span className="contact-text">cullen.maiten@gmail.com</span></li>
                </ul>
            </div>
            <div className='div-redes'>
            <ul className="social-media-list" id={theme}>
                <a href="https://github.com/MaitenCullen" target="_blank" className="contact-icon">
                <FiGithub  style={style2} as='a' href="https://github.com/MaitenCullen"/></a>
                <a href="https://www.linkedin.com/in/maiten-cullen-/" target="_blank" className="contact-icon">
                <FaLinkedin style={style2}/></a>
                <a href="https://wa.me/3413540307" target="_blank" className="contact-icon">
                <IoLogoWhatsapp style={style2}/></a>             
            </ul>
            </div>
        </div>
    </section>  
  )
}
