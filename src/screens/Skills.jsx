import React, { useEffect, useState } from 'react'
import { getSkills } from '../mock/images';
import { useTranslation } from 'react-i18next';

export const Skills = () => {
    const theme = ''
    const [ skills, setSkills] = useState([])
    const [t, i18n] = useTranslation("global");
    useEffect (() => {
        getSkills()
        .then((resp) => {
            setSkills(resp);
         })
    },[]);


  return (
    <section className='skillsDiv' id='skills'>
        <h1 id={theme}>
        {t('skills.HABILIDADES')}
        </h1>
        <div className='skills'>
            { skills.map( skill => (
                <div  key={skill.id} className='skill-div'>
                    <img className='skillsImage' src={skill.imagen}/>
                    <p className='skillTitle'>{skill.tecnologia}</p>
                </div>
            ))}
        </div>
    </section>
  )
}
