import React, { useState } from 'react'
import { db } from '../firebase/Firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { RiSendPlaneFill } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { GoLocation } from "react-icons/go";
import { useTranslation } from 'react-i18next';
 





 export const Contact = () => {
  const [t, i18n] = useTranslation("global");
  const theme = ''
  const style = { fontSize: "1.3em" }
  const style2 = { width:"1.5em"}
  const styleSend = {color:'red', fontSize: "2.5em" }
  const [ contacto, setcontacto] = useState({})
  const [mesaje, setMesaje] = useState('')
  const userContact = (event) => {
    setcontacto({
          ...contacto,
          [event.target.name]: event.target.value,
          // [event.target.consulta]: event.target.value,
          // [event.target.mail]: event.target.value,
    })
  }

const contactDates = (event) => {
  event.preventDefault()
  const contactUser = collection(db, "usuarios")
  addDoc(contactUser, {
    contacto,
    fecha: serverTimestamp()
  })
  .then((response)=> {
    setMesaje(response.id)
  })
}

  return (

<section id="contact">
  <h1 className="sectionHeader">{t('contacto.CONTACTO')}</h1>
  <div className="contactWrapper"> 
  {!mesaje ? 
      <form id="contact-form" className="formContact" role="form"   onSubmit={contactDates}>
          <div>
            <input type="text" className="formControl" id="name" placeholder={t('contacto.INPUT-NOMBRE')} name='nombre' onChange={userContact} required/>
          </div>
          <div>
            <input className="formControl" id="email"  type="email"
             pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" placeholder={t('contacto.INPUT-MAIL')} name='mail' onChange={userContact} required/>
          </div>
          <div>
          <textarea className="formControl"  name="consulta" rows="5" cols="28" onChange={userContact} placeholder={t('contacto.INPUT-TEXTO')} required></textarea>
          </div>
        <button className="formButton" id="submit" type="submit" value="Enviar">
          <div className="alt-formButton">
          <RiSendPlaneFill  style={styleSend}/><span className="sendText">{t('contacto.INPUT-ENVIAR')}</span>
          </div> 
        </button>
      </form> : <div> <h2>{t('contacto.TEXT-CONFIRMACION')}</h2></div> }
      <div className="dataContactContainer">
        <ul className="contactList" id={theme}>
          <li className="listItem"><GoLocation className="icon-contact" style={style}/><span className="contact-text">Rosario, Argentina</span></li>
          <li className="listItem"><FaWhatsapp style={style}/><span className="contact-text">+54(341)15-3540307</span></li>          
          <li className="listItem"><HiOutlineMail style={style}/><span className="contact-text">cullen.maiten@gmail.com</span></li>
        </ul>
        <hr/>
        <ul className="social-media-list" id={theme}>
          <a href="https://github.com/MaitenCullen" target="_blank" className="contact-icon">
           <FiGithub  style={style2} as='a' href="https://github.com/MaitenCullen"/></a>
          <a href="https://www.linkedin.com/in/maiten-cullen-/" target="_blank" className="contact-icon">
           <FaLinkedin style={style2}/></a>
          <a href="https://wa.me/3413540307" target="_blank" className="contact-icon">
           <IoLogoWhatsapp style={style2}/></a>             
        </ul>
        <hr/>
     </div>
  </div>
</section>  
  )
}

