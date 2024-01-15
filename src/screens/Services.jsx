import React from "react";
import { ServicesInfo } from "../components/ServicesInfo";
import { useTranslation } from "react-i18next";



export const Services = () => {
    const [t, i18n] = useTranslation("global");
    return(
        <section id='servicios'>
            <div className="div-services">
                <h1>{t('servicios.SERVICIOS')}</h1>
                <ServicesInfo/>
            </div>
        </section>
   
    );
}