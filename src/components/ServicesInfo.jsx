import React from "react"
import { useTranslation } from "react-i18next";

export const ServicesInfo = () =>{
    const [t, i18n] = useTranslation("global");
    return (
        <div className="div-services-component">
            <div className="div-info-services c00" id="">
                <div className="div-title-services c00" id="">
                    <h3>{t('servicios-info.LANDING-PAGE-INICIAL')}</h3>
                    <hr className="linea"/>
                    <h4>{t('servicios-info.SUBTITULO-00')}</h4>
                </div>
                <div className="container-lista">
                    <div className="div-lista c00">
                        <ul>
                            <li>{t('servicios-info.LANDING-0A')}</li>
                            <li>{t('servicios-info.LANDING-0B')}</li>
                            <li>{t('servicios-info.LANDING-0C')}</li>
                            <li>{t('servicios-info.LANDING-0D')}</li>
                            <li>{t('servicios-info.LANDING-0E')}</li>
                            <li>{t('servicios-info.LANDING-0F')}</li>
                            <li>{t('servicios-info.LANDING-0G')}</li>
                            <li>{t('servicios-info.LANDING-0H')}</li>
                            <li>{t('servicios-info.LANDING-0I')}</li>
                            <li>{t('servicios-info.LANDING-0J')}</li>
                            <li>{t('servicios-info.LANDING-0K')}</li>
                        </ul>
                    </div>
                    <div className="div-precios c00">
                        <h4>$80.000</h4>
                        <p>{t('servicios-info.PAGO')}</p>
                        {/* <a href="">Ejemplo</a> */}
                    </div>
                </div>
            
            </div>
            <div className="div-info-services c01" id="">
                <div className="div-title-services c01" id="">
                    <h3>{t('servicios-info.WEB-INTERMEDIA')}</h3>
                    <hr className="linea"/>
                    <h4>{t('servicios-info.SUBTITULO-01')}</h4>
                </div>
                <div className="container-lista">
                    <div className="div-lista c01">
                        <ul>
                            <li>{t('servicios-info.INTERMEDIA-0A')}</li>
                            <li>{t('servicios-info.INTERMEDIA-0B')}</li>
                            <li>{t('servicios-info.INTERMEDIA-0C')}</li>
                            <li>{t('servicios-info.INTERMEDIA-0D')}</li>
                            <li>{t('servicios-info.INTERMEDIA-0E')}</li>
                            <li>{t('servicios-info.INTERMEDIA-0F')}</li>
                            <li>{t('servicios-info.INTERMEDIA-0G')}</li>
                            <li>{t('servicios-info.INTERMEDIA-0H')}</li>
                            <li>{t('servicios-info.INTERMEDIA-0I')}</li>
                            <li>{t('servicios-info.INTERMEDIA-0J')}</li>
                            <li>{t('servicios-info.INTERMEDIA-0K')}</li>
                            <li>{t('servicios-info.INTERMEDIA-0L')}</li>
                            <li>{t('servicios-info.INTERMEDIA-0M')}</li>
                        </ul>
                    </div>
                    <div className="div-precios c01">
                        <h4>$100.000</h4>
                        <p>{t('servicios-info.PAGO')}</p>
                        {/* <a href="">Ejemplo</a> */}
                    </div>
                </div>
            </div>
            <div className="div-info-services c02" id="">
                <div className="div-title-services c02" id="">
                    <h3>{t('servicios-info.WEB-COMPLETITA')}</h3>
                    <hr className="linea"/>
                    <h4>{t('servicios-info.SUBTITULO-02')}</h4>
                </div>
                <div className="container-lista">
                    <div className="div-lista c02">
                        <ul>
                            <li>{t('servicios-info.COMPLETITA-0A')}</li>
                            <li>{t('servicios-info.COMPLETITA-0B')}</li>
                            <li>{t('servicios-info.COMPLETITA-0C')}</li>
                            <li>{t('servicios-info.COMPLETITA-0D')}</li>
                            <li>{t('servicios-info.COMPLETITA-0E')}</li>
                            <li>{t('servicios-info.COMPLETITA-0F')}</li>
                            <li>{t('servicios-info.COMPLETITA-0G')}</li>
                            <li>{t('servicios-info.COMPLETITA-0H')}</li>
                            <li>{t('servicios-info.COMPLETITA-0I')}</li>
                            <li>{t('servicios-info.COMPLETITA-0J')}</li>
                            <li>{t('servicios-info.COMPLETITA-0K')}</li>
                            <li>{t('servicios-info.COMPLETITA-0L')}</li>
                            <li>{t('servicios-info.COMPLETITA-0M')}</li>
                        </ul>
                    </div>
                    <div className="div-precios c02">
                        <h4>$120.000</h4>
                        <p>{t('servicios-info.PAGO')}</p>
                        {/* <a href="">Ejemplo</a> */}
                    </div>
                </div>
            </div>
            <div className="div-info-services c03" id="">
                <div className="div-title-services c03" id="">
                    <h3>{t('servicios-info.WEB-COMERCIO')}</h3>
                    <hr className="linea"/>
                    <h4>{t('servicios-info.SUBTITULO-03')}</h4>
                </div>
                <div className="container-lista">
                    <div className="div-lista c03">
                        <ul>
                            <li>{t('servicios-info.COMERCIO-0A')}</li>
                            <li>{t('servicios-info.COMERCIO-0B')}</li>
                            <li>{t('servicios-info.COMERCIO-0C')}</li>
                            <li>{t('servicios-info.COMERCIO-0D')}</li>
                            <li>{t('servicios-info.COMERCIO-0E')}</li>
                            <li>{t('servicios-info.COMERCIO-0F')}</li>
                            <li>{t('servicios-info.COMERCIO-0G')}</li>
                            <li>{t('servicios-info.COMERCIO-0H')}</li>
                            <li>{t('servicios-info.COMERCIO-0I')}</li>
                            <li>{t('servicios-info.COMERCIO-0J')}</li>
                            <li>{t('servicios-info.COMERCIO-0K')}</li>
                            <li>{t('servicios-info.COMERCIO-0L')}</li>
                            <li>{t('servicios-info.COMERCIO-0M')}</li>
                            <li>{t('servicios-info.COMERCIO-0N')}</li>
                            <li>{t('servicios-info.COMERCIO-0R')}</li>
                        </ul>
                    </div>
                    <div className="div-precios c03">
                        <h4>$150.000</h4>
                        <p>{t('servicios-info.PAGO')}</p>
                        {/* <a href="">Ejemplo</a> */}
                    </div>
                </div>
            </div>
        </div>
    )
}