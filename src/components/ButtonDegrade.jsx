import React from 'react';

export function ButtonDegrade(props) {
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
            <span>Contactanos</span>
        </button>
    </>
  );
}
