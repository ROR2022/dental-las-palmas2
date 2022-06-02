import React from 'react'
import { images } from '../dataImages'
import '../estilos/misfotos.css'

const MisFotos = () => {
  return (
    <div>
        <div className='main-cont2'>

            {images.map(el=>
                <img key={el.id} onClick={(e)=>window.location.href=e.target.src} className={el.alias} src={el.url} alt=''/>
            )}

        </div>
    </div>
  )
}

export default MisFotos