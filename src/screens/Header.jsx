import React from 'react'
import { NavBar } from '../components/Navbar'
import { useTranslation} from "react-i18next"


export const Header = () => {
  const theme = ''
  const [t, i18n] = useTranslation("global");
  return (
    <section className='homeDiv' id='home'>
    <div className='textDiv'>
      <div className='nameDiv'>
        <h3 className='title'>{t('header.HOLA')}</h3>
        <h1 className='h1Name' id={theme}>Maitén</h1>
        <h2 id={theme}>Front End Developer</h2>
        <h4 className='title'>{t("header.COTIDIANO")}</h4>
      </div>
    <div className='navFooter'>
        <NavBar/>
    </div>
    </div>
    </section>

  )
}
