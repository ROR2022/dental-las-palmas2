import React, { useState } from 'react'
import '../estilos/cita.css'


function isMobile() {
    if (sessionStorage.desktop)
        return false;
    else if (localStorage.mobile)
        return true;
    let mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
    for (let i in mobile)
        if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
    return false;
}

const initialForm = {
    nombre:"",
    correo:"",
    telefono:"",
    fecha:""
}

const Cita = () => {

    const [form,setForm]=useState(initialForm);

    let inpunts = document.getElementsByClassName('formulario__input');
    for (let i =0; i< inpunts.length; i++){
    inpunts[i].addEventListener('keyup', function() {
        if (this.value.length>=1){
            this.nextElementSibling.classList.add('fijar');
        } else {
            this.nextElementSibling.classList.remove('fijar');
        }
    });
    }
    const actualizar= (e)=> {
        setForm({
            ...form,
            [e.target.id]: e.target.value
        })
    }
    const enviarDatos = () =>{

        const urlDesktop = 'https://web.whatsapp.com/';
        const urlMobile = 'whatsapp://';
        const telefono = '5217331069098';
        

        let mensaje = `send?phone=${telefono}
                    &text=Hola soy:%0A${form.nombre}
                    %0AMi Teléfono es:%0A${form.telefono}
                    %0Ami correo electrónico es:%0A${form.correo}
                    %0Ame gustaria agendar cita:%0A${form.fecha}`;

        setForm(initialForm);

        isMobile() ? window.location.href= urlMobile + mensaje : window.location.href= urlDesktop + mensaje;
                    
        
        
    }
  return (
    <div>
        <form action="" onSubmit={enviarDatos} className="formulario">
        <h1 className="formulario__titulo">Solicitar Cita</h1>
        <input type="text" value={form.nombre} onChange={actualizar} className="formulario__input" id="nombre" required/>
        <label htmlFor=""
            className="formulario__label"> Nombre:</label>
        <input type="email" value={form.correo} onChange={actualizar} className="formulario__input" id="correo" required/>
        <label htmlFor=""
            className="formulario__label"> Correo:</label> 
        <input type="tel" value={form.telefono} onChange={actualizar} className="formulario__input" id="telefono" required pattern="[0-9]{10}"/>
        <label htmlFor=""
            className="formulario__label"> Telefono:</label>
        <input type="text" value={form.fecha} onChange={actualizar} className="formulario__input" id="fecha" required/>
        <label htmlFor=""
            className="formulario__label"> Dia y Hora:</label>   
        <input type="submit" value="SOLICITAR" className="formulario__submit"  required/>
        
        
    </form>
    </div>
  )
}

export default Cita