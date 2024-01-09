import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { getSkills } from '../mock/images';
import { useTranslation } from 'react-i18next';

export const Skills = () => {
    const theme = '';
    const [skills, setSkills] = useState([]);
    const [t, i18n] = useTranslation('global');

    useEffect(() => {
        getSkills().then((resp) => {
            setSkills(resp);
        });
    }, []);

    const carouselItems = skills.map((skill) => (
        <div key={skill.id} className='skill-div'>
            <img className='skillsImage' src={skill.imagen} alt={skill.tecnologia} />
            <p className='skillTitle'>{skill.tecnologia}</p>
        </div>
    ));

    return (
        <section className='skillsDiv' id='skills'>
            <h1 id={theme}>{t('skills.HABILIDADES')}</h1>
            <div className='skills'>
                {skills.length > 0 ? (
                    <Carousel
                        showThumbs={false}
                        showArrows={false}
                        emulateTouch={true}
                        showStatus={false}
                        showIndicators={false}
                        interval={3000} // Cambia el intervalo de cambio de imágenes en milisegundos
                        infiniteLoop={true}
                        centerMode={true}
                        centerSlidePercentage={20} // Ajusta el porcentaje de tamaño de cada imagen
                        autoPlay={true} // Reproducción automática
                        stopOnHover={false} // Continúa reproducción al pasar el mouse
                    >
                        {carouselItems}
                    </Carousel>
                ) : (
                    <p>Cargando imágenes...</p>
                )}
            </div>
        </section>
    );
};
