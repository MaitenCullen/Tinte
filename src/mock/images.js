

const Skills = [{
    id:1,
    tecnologia:"Javascript",
    imagen:"./img/javascript.png"
}, 
{
    id:2,
    tecnologia:"Figma",
    imagen:"./img/figma.png"
},
{
    id:3,
    tecnologia:"SQL",
    imagen:"./img/sql.png"
},
{
    id:4,
    tecnologia:"Angular",
    imagen:"./img/angular.png"
},
{
    id:5,
    tecnologia:"Next js",
    imagen:"./img/next.png"
},
{
    id:6,
    tecnologia:"HTML",
    imagen:"./img/html5.png"
},
{
    id:7,
    tecnologia:"React js",
    imagen:"./img/ReactJS1.png"
},
{
    id:8,
    tecnologia:"PHP",
    imagen:"./img/php.png"
},
{
    id:9,
    tecnologia:"CSS",
    imagen:"./img/css3.png"
},
{
    id:10,
    tecnologia:"Bootstrap",
    imagen:"./img/bootstrap1.png"
},
{
    id:11,
    tecnologia:"Firebase",
    imagen:"./img/firebase.png"
},
{
    id:12,
    tecnologia:"Foundation",
    imagen:"./img/foundation.png"
},
{
    id:13,
    tecnologia:"React Native",
    imagen:"./img/reactMulti.png"
},
{
    id:14,
    tecnologia:"Postman",
    imagen:"./img/postman-icon.png"
},
{
    id:15,
    tecnologia:"SASS",
    imagen:"./img/sass.png"
}
,
{
    id:16,
    tecnologia:"Tailwind",
    imagen:"./img/tailwind1.png"
},
{
    id:17,
    tecnologia:"Node js",
    imagen:"./img/node.png"
},
{
    id:18,
    tecnologia:"Photoshop",
    imagen:"./img/ps.png"
}

]

export const  getSkills =() =>  new Promise ((resolve, reject) => {
let condition = true
        if (condition){
            resolve(Skills)
        } else {
            reject ("algo salio mal")
        }
    })

    export const getItem=(id) =>  new Promise ((resolve) => {
        let condition = true
            if (condition){
                resolve(Skills.find(skill => skill.id === parseInt(id)))
            }
                  
        })