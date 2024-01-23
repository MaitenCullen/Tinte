import React, { useContext } from 'react'
import { useTranslation} from "react-i18next"
import copaB from "/copasB.png"
import copaV from "/copasV.png"
import copaA from "/copasA.png"
import copaN from "/copasNaranjas.png"
import { Button } from '../components/Button'
import { ThemeContext } from '../App'

export const Section02 = () => {
  const {theme} = useContext(ThemeContext);
  console.log(theme, "theme about")
  const [t, i18n] = useTranslation("global");
  return (
    <section className='section-copas'>
       {theme === 'dark' ? <img  src={copaN} alt='imagen central' /> : <img  src={copaV} alt='imagen central' /> }
    </section>

  )
}
