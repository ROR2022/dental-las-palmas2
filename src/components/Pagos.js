import React, { useState, useEffect } from 'react'
import {loadStripe} from '@stripe/stripe-js';
import {Elements, CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import axios from 'axios';
//import "bootswatch/dist/lux/bootstrap.min.css"
import "../estilos/pagos.css";

const stripePromise = loadStripe("pk_test_51L8EuNHKsPF0nmZb5rHzJ7rncpZMpg8TbUu1L8kcfbDalOJsnox5FgVJRG5DNdF4p44tEmjldfAsXKfmd07L5OZu00mvfUwPjc");
//pk_test_51L8EuNHKsPF0nmZb5rHzJ7rncpZMpg8TbUu1L8kcfbDalOJsnox5FgVJRG5DNdF4p44tEmjldfAsXKfmd07L5OZu00mvfUwPjc
const MiloaderPagos = ()=>{
    return (
     <div className="lds-facebook">
            <div></div>
            <div></div>
            <div></div>
    </div>
    )  
}

const groserias = [
    "PUTO","PUTA","CUL","CULO","ULO","CULER","CULEY","CULERO","CULERA","FUNDILLO","PINCHE","PINCHES","MAMES",
    "CHIN","CHINGA","CHAQUETAS","CHAQUETA","CHAQUETEAR","CHAQUETEADO","CHAQUETO","CHINGO","CHINGADO","CHINGADA","CHINGAR","CHINTETES",
    "VERGA","PITO","PENE","PANOCHA","COCHO","MIERDA",
    "HEDIONDO","BARRIGON","PUTISIMA","PUTISIMO","PUTI","REPUTISIMA","REPUTISIMO","REPUTO","REPUTA","MUERTE",
    "LEVANTON","SECUESTRO","EXTORSION","DROGA","DROGAS","PROSTITUTA","PROSTITUTO","LOCO","LOCA"
]


const CheckoutForm = () =>{
    const [loader, setLoader] = useState(false);
    const [iscel, setIscel]= useState(true);
    const [mimonto, setMimonto] = useState('');
    const [miresult, setMiresult] = useState(null);
    const [mierror, setMierror] = useState(null);
    const [miconcepto, setMiconcepto] = useState("");
    const [grosero, setGrosero] = useState(false);

    const cambiaMonto = (e) => {
        setMimonto(e.target.value);
        if(miresult)  setMiresult(null); 
    }
    const cambiaConcepto = (e) => {
        setMiconcepto(e.target.value);
        setGrosero(false);
    }
    const borraMonto = ()=>{
        setMimonto('');
    }

    

    useEffect(() => {
      
        (window.innerWidth<700) ? setIscel(true):setIscel(false);
    
      
    }, [])
    
    

    const stripe= useStripe();
    let elements = useElements();

    const cardStyle = {
        style: {
          base: {
            color: "#32325d",
            fontFamily: 'Arial, sans-serif',
            fontSmoothing: "antialiased",
            fontSize: iscel?"20px":"40px",
            "::placeholder": {
              color: "#32325d"
            }
          },
          invalid: {
            fontFamily: 'Arial, sans-serif',
            color: "#fa755a",
            iconColor: "#fa755a"
          }
        }
      };

    

    const handleSubmit = async (e)=>{
        e.preventDefault();

        let groseria = false;
        let buscandoGroseria = miconcepto.toUpperCase();
        
        for ( let el in groserias){
            
            groseria = buscandoGroseria.includes(groserias[el]);
            if (groseria) {
                setGrosero(true);
                return
            } else {
                setGrosero(false);
            }
        }

        if (grosero) return;

        if (mimonto<50) {
            setMierror('El Monto es inferior a $50.00 pesos');
            return
        } 
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        })
        setLoader(true);

        if(!error){
            //console.log(paymentMethod);
            const { id } = paymentMethod;
            try {
                const { data } = await axios.post('https://143.198.134.190/api/checkout', {
                id, 
                amount: mimonto*100, 
                concepto: miconcepto ? miconcepto : "sin concepto"
                 })
                console.log(data);

                if(data.message==="Succesfull payment") setMiresult("El pago se Realizó con Exito");
                else setMierror(data);
                
                setMiconcepto("");
                borraMonto();
                elements.getElement(CardElement).clear();
            } catch (error) {
                console.log(error);
                setMierror(error.message);
            }
            
        } else {
            console.log(error);
            setMierror(error.message);
        }
        setLoader(false);
    }
    return <form onSubmit={handleSubmit} className="card-container">
        <img src="images/logonew1.png" alt="img-dental" className='img-pagos'/>
        <h3 className='monto-pagar'>Monto: $
        <input type="number" 
        className='mimonto'
        onChange={cambiaMonto}
        value={mimonto}/>
        </h3>
        <h3 className='concepto-pagar'>Concepto:
        <input type="text" 
        className='miconcepto'
        placeholder='opcional'
        onChange={cambiaConcepto}
        value={miconcepto}/>
        </h3>
        <div className='micard-container'>
            <CardElement options={cardStyle} className='micard-element'/>
        </div>
        { mimonto>=50 &&
        <button className='btn-pagar' disabled={!stripe?true:false}>{loader?<MiloaderPagos/>:'Pagar'}</button>}
        { miresult && <h3 className='miresult'>{miresult}</h3>}
        { mierror && !miresult && <h3 className='mierror'>{mierror}</h3>}
        { grosero && <h3 className='mierror'>Hay un error en el concepto</h3>}
    </form>
}

const Pagos = () => {
  return (
    <Elements stripe={stripePromise}> 
        <div>
            <div>
                <div>
                    <CheckoutForm/>
                </div>
            </div>
        </div>
    </Elements>
  )
}

export default Pagos