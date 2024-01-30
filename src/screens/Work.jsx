import React, { useContext } from 'react'
import { useTranslation} from "react-i18next"
import uvaB from "/uvaB.png"
import uvaV from "/uvaV.png"
import uvaA from "/uvaA.png"
import uvaN from "/uvaN.png"
import uvaD from "/uvaDegrade0.png"
import uvaD1 from "/uvaDegrade01.png"
import uvaD2 from "/uvaDegrade02.png"
import uvaD3 from "/uvaDegrade03.png"
import { Button } from '../components/Button'
import { ThemeContext } from '../App'

export const Work = () => {
  const {theme} = useContext(ThemeContext);
  console.log(theme, "theme about")
  const [t, i18n] = useTranslation("global");
  return (
    <section className='work-section'>
        <div className='div-work-text'>
          <div>
            <h4 className='work-h4'>
                  Nosotros
              </h4>
              <p className='work-p'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi a hic dolorum perspiciatis voluptatibus tenetur suscipit consequuntur animi laborum explicabo, minus blanditiis quibusdam vitae! Aliquid omnis alias necessitatibus ab ipsa!
              </p>
          </div>  
            <Button text='Contactanos' className='yellow'/>
        </div>
        <div>
        {theme === 'dark' ? <img  src={uvaD3} alt='imagen central' /> : <img  src={uvaD} alt='imagen central' /> }
        </div>
    </section>

  )
}
