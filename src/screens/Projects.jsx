import React from 'react'
import { CardProjects } from '../components/CardProjects'
import { useTranslation } from 'react-i18next';


export const Projects = () => {
  const [t, i18n] = useTranslation("global");
    // const theme = ''
  return (
   <section className="content" id='projects'>
    <h1>{t('project.PROYECTOS')}</h1>
    <div className='divPoject'>
    <CardProjects/>
    </div>
    </section>
  )
}
