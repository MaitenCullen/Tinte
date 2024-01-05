import React, { useEffect, useState } from 'react';
import { getAllProjects } from '../mock/project';
import { useTranslation } from 'react-i18next';

export const CardProjects = () => {
  const theme = '';
  const [t, i18n] = useTranslation("global");
  const bettyDescription = t('proyectos.BETTY');
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getAllProjects().then((resp) => {
      setProjects(resp);
    });

    
  }, []);



  return (
    <>
      {projects.map((project) => (
        <div className='card cardMobile animate' key={project.id}>
          <a className="" href={project.link} target="_blank">
            <div className="icon" ><i className="material-icons md-36">{project.icon}</i></div>
            <p className="title">{project.project}</p>
            <p className="text">{t(`proyectos.${project.description}`)} </p>
            {project.video ? <p className="text"> <a className='Unlimited ' href="https://ibb.co/zFcrZTD">LINK</a></p> : null}
            <p className="textTechnologies">{project.technologies}</p>
          </a>
        </div>
      ))}
    </>
  );
};
