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





 export const Contact = () => {
  const [t, i18n] = useTranslation("global");
  const {theme} = useContext(ThemeContext);
  const style = { fontSize: "1.3em", margin:"15px" }
  const style2 = { width:"1.5em"}
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
  <h3 className="sectionHeader">{t('contacto.IDEA')}</h3>
  <h3 className="sectionHeader">{t('contacto.IDEA-CONTACTO')}</h3>
  <div className="contactWrapper"> 
  {!mesaje ? 
      <div>
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
            <Button text="Enviar"/>
        </form> 
      </div> : <div> <h2>{t('contacto.TEXT-CONFIRMACION')}</h2></div> 
       }
      <div>
      {theme === 'dark' ? <img  src={copaA} alt='imagen central' /> : <img  src={copaV} alt='imagen central' /> }
      </div>
  </div>
</section>  
  )
}

