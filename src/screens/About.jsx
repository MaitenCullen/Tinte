import React, { useContext } from 'react'
import { useTranslation} from "react-i18next"
import copa1 from "/copa1.png"
import copa2 from "/copa2.png"
import copa3 from "/copa3.png"
import copa4 from "/copa4.png"
import copa5 from "/copa5.png"
import copa6 from "/copa6.png"
import copa7 from "/copa7.png"
import copa8 from "/copa8.png"
import { Button } from '../components/Button'
import { ThemeContext } from '../App'

export const About = () => {
  const {theme} = useContext(ThemeContext);
  console.log(theme, "theme about")
  const [t, i18n] = useTranslation("global");
  return (
    <section className='homeDiv'>
      <div className='divText'>
        <div>
          <h2 className='title' >{t('header.TITULO')}</h2>
          <h3 className='title' >{t("header.TEXTO")}</h3> 
        </div>
          <Button text="Inicia tu proyecto"/>
      </div>
       {theme === 'dark' ? <img  src={copa1} alt='imagen central' /> : <img  src={copa6} alt='imagen central' /> }
    </section>

  )
}
