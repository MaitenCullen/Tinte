import React from 'react'
import { NavBar } from '../components/Navbar'
import { useTranslation} from "react-i18next"
import tinteHeader from "/tinteHeader2.png"

export const About = () => {
  const theme = ''
  const [t, i18n] = useTranslation("global");
  return (
    <section className='homeDiv' id='home'>
      <div className='divText'>
        <div>
          <h2 className='title' id={theme}>{t('header.TITULO')}</h2>
          <h3 className='title' id={theme}>{t("header.TEXTO")}</h3> 
        </div>
          <button> Comienza tu proyecto</button>
      </div>
       <div>
        <img src={tinteHeader} alt="imagen header" />
       </div>
    </section>

  )
}
