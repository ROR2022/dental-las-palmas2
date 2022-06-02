import React from 'react'
import Carrusel from './Carrusel'
import Footer from './Footer'
import Header from './Header'
import '../estilos/home.css';
import Articulos from './Articulos';
import Cita from './Cita';

const Home = () => {
  return (
    <div>
        <Header/>
        <hr />
        <Carrusel/>
        <hr />
        <a href="tel:+527331069098">
        <button className='llamar-ahora'>
        <img className='logo-llamar-ahora' src="images/iconotel.png" alt="" />
          ¡LLAMAR AHORA!</button>
        </a>
        <hr />
        <Articulos/>
        <hr />
        <Cita/>
        <hr />
        <a href="https://api.whatsapp.com/send?phone=5217331069098&text=%C2%A1Hola%20me%20gustar%C3%ADa%20hacer%20una%20cita!">
        <button className='llamar-ahora'>
          <img className='logo-llamar-ahora' src="images/iconowats.png" alt="" />
          Enviar Mensaje
          </button>
        </a>
        <hr />
        <Footer/>
    </div>
  )
}

export default Home