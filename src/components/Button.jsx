import React from 'react'

export function Button(props){
    return (
        <>
         <button className={`button ${props.className || ''}`}>{props.text}</button>
        </>
    )
}