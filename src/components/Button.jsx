import React from 'react'

export function Button(props){
    return (
        <>
         <button className={`button bgc ${props.className || ''}`}>{props.text}</button>
        </>
    )
}