import React,{useState} from 'react';
import MenuV from './MenuV';
import '../estilos/footer.css'

const Footer = () => {
    const [menu, setMenu] = useState(false);
    const mostrarMenu = ()=>{
      setMenu(prev=>!prev);
    }
  return (
    <div>
        {menu && <MenuV/>}
        <div className='cab-cont'>
        
        <img className="logo" src="images/logonew1.png" alt="" />
            <div className='tit-cont'>
            <h2 className='titulo'>Las Palmas</h2>
            <h3 className='subtitulo'>clinica dental</h3>
            </div>
        <div onClick={mostrarMenu} className='logo2-cont'>
            <img className="logo2" src="images/iconomenu.png" alt="" />
        </div>      
        </div>
        <div className='firma'>
                <h2 className='nombre'>Dra. Berenice Ocampo Rodríguez</h2>
                <h3 className='lema'>Mejorando Sonrisas</h3>
                <h3 className='lema'>7331069098</h3>
                <a className='option1' href="https://www.google.com.mx/maps/place/C.+Mariano+Arista+5,+Centro,+40000+Iguala+de+la+Independencia,+Gro./@18.3412955,-99.5341271,19z/data=!3m1!4b1!4m5!3m4!1s0x85cc38654ed9b8ed:0x99c19803b87c96d9!8m2!3d18.3412942!4d-99.5335799?hl=es-419">
                      <p className='domi-footer'>Calle: Aritsta #5 entre Melchor Ocampo y Aldama Iguala, Gro. </p>
                </a>
                
        </div>
    </div>
  )
}

export default Footer