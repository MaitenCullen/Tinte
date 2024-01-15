import React from "react"
import { useTranslation } from "react-i18next";

export const ServicesInfo = () =>{
    const [t, i18n] = useTranslation("global");
    return (
        <div className="div-services-component">
                <div className="div-title-services" id="">
                    <h3>{t('servicios-info.DESARROLLO-WEB')}</h3>
                    <hr className="linea"/>
                    <h4>{t('servicios-info.TEXTO-0')}</h4>
                </div>
                <div className="div-title-services" id="">
                    <h3>{t('servicios-info.DISEÑO-CREATIVO')}</h3>
                    <hr className="linea"/>
                    <h4>{t('servicios-info.TEXTO-1')}</h4>
                </div>
                <div className="div-title-services" id="">
                    <h3>{t('servicios-info.ESTRAEGIAS-DIGITALES')}</h3>
                    <hr className="linea"/>
                    <h4>{t('servicios-info.TEXTO-2')}</h4>
                </div>
        </div>
    )
}