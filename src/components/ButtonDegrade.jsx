import React from 'react';
import { useTranslation } from 'react-i18next';

export function ButtonDegrade(props) {
  const [t, i18n] = useTranslation("global");
  return (
    <>
        <button className="btn">
            <svg width="277" height="62">
            <defs>
                <linearGradient id="grad1">
                <stop offset="0%" stopColor="#FF8282"/>
                <stop offset="100%" stopColor="#E178ED" />
                </linearGradient>
            </defs>
            <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="266" height="55"></rect>
            </svg>
            <span>  {t('button.CONTACTO')}</span>
        </button>
    </>
  );
}
