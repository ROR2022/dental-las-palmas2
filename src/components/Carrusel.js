import React, { useEffect, useState } from 'react'
import '../estilos/carrusel.css'

const data1= [
    "images/logo2.jpg",
    "images/beref6.jpg",
    "images/beref5.jpg",
    "images/beref11.jpg",
    "images/dental1.jpg",
    "images/beref1.jpg",
    "images/beref4.jpg",
    "images/befef10.jpg",
    "images/beref9.jpg",
    "images/beris1.jpg",
]

const Carrusel = () => {
    const [indice, setIndice] = useState(0);
    const [loaded, setLoaded] = useState(false);

        useEffect(()=>{

            const interval= setInterval(()=>{
                avanzar();
            },5000)

            return ()=> clearInterval(interval);
        })

        const regresar= ()=>{
            setLoaded(false);
            if (indice>0) setIndice(prev=>prev-1);
            else setIndice(data1.length-1);
         }     
        const reiniciar= ()=>{
            setIndice(0);
        }
       
     const avanzar= ()=>{
        setLoaded(false);  
        if ( indice < (data1.length-1) ) setIndice(prev=>prev+1); 
        else reiniciar();
     }   

  return (
    <div>
        <div className='botoness'>
            <button onClick={regresar} className='miboton1'>{"<<"}</button>
            <button onClick={avanzar} className='miboton1'>{">>"}</button>
        </div>
            
            <img className={loaded?(indice+1)%2===0?"carru anime":"carru anime2":"carru"} 
            onLoad={()=>setLoaded(true)}
            id="imagen" src={data1[indice]} alt="" />
        
            
    </div>
  )
}

export default Carrusel