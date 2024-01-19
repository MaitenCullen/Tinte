import {GiSelfLove } from "react-icons/gi";
import { RiGameLine } from "react-icons/ri";
import { FaChalkboardTeacher, FaRegHandSpock } from "react-icons/fa";
import { MdOutlineEmojiPeople } from "react-icons/md";
import { IoCarSportOutline, IoHammerOutline } from "react-icons/io5";
import { FaDog } from "react-icons/fa";
import { ImLab } from "react-icons/im";
import { RiBuilding2Line } from "react-icons/ri";
import React from "react";


const project = [
    {
        id:0,
        project:'Betty SexShop',
        description:"BETTY",
        technologies:'React js, Javascript, Firebase, SASS',
        link:'https://betty-juguetes2-xi.vercel.app/',
        image:'./betty.png',
        icon:'./betty.png'
    },
    {
        id:1,
        project:'Laprinsumos 3D',
        description:'LAPRINSUMOS',
        technologies:'HtML, CSS, Bootstrap, Figma',
        link:'https://laprinsumosfinal.vercel.app/',
        image:'./laprinsumos.png',
        icon:'./laprinsumos.png'
    },
    {
        id:2,
        project:'ItEnseño',
        description:'ITENSENO',
        technologies:'Figma, React JS, Javascript, SASS, Node JS, React Bootstrap, Monongose.',
        link:'https://s5-06-mern.vercel.app/',
        image:'./ITenseño.png',
        icon:'./itenseño.png'
    },
    {
        id:3,
        project:'SantaFe Más',
        description:'SANTA-FE-MAS',
        technologies:'HTML, CSS, Bootstrap, SASS',
        link:'https://santa-fe-mas.vercel.app/',
        image:'./santaFemas.jpg',
        icon:'./santa.png'
    },
    // {
    //     id:4,
    //     project:'Autosescuela',
    //     description:'AUTOESCUELA',
    //     technologies:'Javascript, HTML, SASS',
    //     link:'https://autoescuela.vercel.app/',
    //     image:'./autoEscuela.png',
    //     icon:<IoCarSportOutline/>
    // },
     {
        id:5,
         project:'Little Laniless. Desings',
         description:'Laliness',
         technologies:'React Native, Node Js, Mongo DB',
         link:'t',
         icon:'./little.png'
     },
        {
        id:6,
        project:'Contrata',
        description:'CONTRATA',
        technologies:'React JS, Redux, Tailwind, Node JS, Doker, Mongo, Moongose',
        link:'https://contrata.vercel.app/',
        image:'./contrata.png',
        icon:'./contrata.png'
    },
    {
        id:7,
        project:'Monarquia Perruna',
        description:'MONARQUIA-PERRUNA',
        technologies:'React JS, Daisy UI, Figma',
        link:'http://www.monarquiaperruna.com.ar/',
        icon:'./monarquia.png'
    },         
     {
         id:8,
         project:'Comming, App Mobile',
         description:'Comming',
         technologies:'',
         link:'',
         icon:'./comming.png',
     } ,
    //  {
    //      id:9,
    //      project:'Fidel Construcciones',
    //      description:'FIDEL-CONSTRUCCIONES',
    //      technologies:'HTML, CSS, Styled Component, Javascript, React Js',
    //      link:'https://fidel-construcciones.vercel.app/',
    //      image:'./fidel.png',
    //      icon:<RiBuilding2Line/>  
    //  } 
]


export const  getAllProjects =() =>  new Promise ((resolve, reject) => {
    let condition = true
            if (condition){
                resolve(project)
            } else {
                reject ("algo salio mal")
            }
        })
    
        export const getProject=(id) =>  new Promise ((resolve) => {
            let condition = true
                if (condition){
                    resolve(projects.find(project => project.id === parseInt(id)))
                }
                      
            })