import React from 'react'
import { Link } from 'react-router-dom';
import '../estilos/menuv.css';

const MenuV = () => {
  return (
    <div className='menu-cont'>
        <Link className='option' to='/'>
            <img src="images/iconohome.png" alt="" />
            <p>Inicio</p>
        </Link>
        <hr />
        <Link className='option'to='/cita'>
            <img src="images/iconocita.png" alt="" />
            <p>Hacer una Cita</p>
        </Link>
        <hr />
        <Link className='option' to='/galeria'>
           <img src="images/iconogaleria.png" alt="" />
            <p>Galeria</p>
        </Link>
        <hr />
        <Link className='option' to='/articulos'>
            <img src="images/iconoarticulos.png" alt="" />
            <p>Articulos</p>
        </Link>
        <hr />
        <a className='option' href="https://www.google.com.mx/maps/place/C.+Mariano+Arista+5,+Centro,+40000+Iguala+de+la+Independencia,+Gro./@18.3412955,-99.5341271,19z/data=!3m1!4b1!4m5!3m4!1s0x85cc38654ed9b8ed:0x99c19803b87c96d9!8m2!3d18.3412942!4d-99.5335799?hl=es-419">
            <img src="images/iconoubi.png" alt="" />
            <p>Ubicacion</p>
        </a>
        <hr />
        <a className='option' href="https://api.whatsapp.com/send?phone=5217331069098&text=%C2%A1Hola%20me%20gustar%C3%ADa%20hacer%20una%20cita!">
            <img src="images/iconowats.png" alt="" />
            <p>Watsapp</p>
        </a>
        <hr />
        <a className='option' href="https://www.facebook.com/dental.laspalmas.969">
            <img src="images/iconoface.png" alt="" />
            <p>Facebook</p>
        </a>
        <hr />
        <a className='option' href="tel:+527331069098">
            <img src="images/iconotel.png" alt="" />
            <p>Llamar</p>
        </a>
        <hr />
        <a className='option' href="mailto:opmac_0984@hotmail.com">
            <img src="images/iconomail.png" alt="" />
            <p>Mail</p>
        </a>
        
    </div>
  )
}

export default MenuV