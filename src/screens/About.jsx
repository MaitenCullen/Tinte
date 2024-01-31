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
import ButtonAnimated from '../components/ButtonAnimated'

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
          <ButtonAnimated text="Inicia tu proyecto" className={theme === 'dark' ? 'red' : 'darkRed'}/>
      </div>
      <div className='divImg'>
        {theme === 'dark' ? <img  src={copa7} alt='imagen central' /> : <img  src={copa5} alt='imagen central' /> }
      </div>
    </section>

  )
}
