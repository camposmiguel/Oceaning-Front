import React from 'react';
import '../styles/Texts.css';
import Header from '../components/Header';
import '../styles/Button.css';
import Ready from '../assets/começar.png';
import {useNavigate} from 'react-router-dom';


function Home() {
    
   //ToRoute
    const history = useNavigate();
    const handleClick = ()=>{
        history('/register');
    }
    
    return (
        <section>
            <Header />
                <text className='textOne' style={{position: 'absolute', width: 'auto', height: 57,left: 465,top: 298,
                                                  fontSize: 38}}>Time de desenvolvimento</text>

                <text style={{position: 'absolute',width: 690,height: 68,left: 375,top: 456,
                              fontFamily: 'Poppins',fontStyle: 'normal',fontWeight: 500,fontSize: 20,
                              color: '#78748C', textAlign:'center'}}>Faça parte dessa jornada junto com a Oceaning e conquiste o mundo com suas habilidades de programação.</text>
                    
                <text style={{position: 'absolute', width: 1006, height: 78, left: 217, top: 361, 
                              fontFamily: 'Poppins, sans-serif', fontStyle:'normal', fontWeight: 800, fontSize: 60, textAlign:'center',
                              color: '#FFFFFF'}}>Sua evolução começa agora</text>

                <button  onClick={handleClick} className='btnBlue' style={{position: 'absolute', width: 371, height: 70, left: 534, top: 684}}  >
                    <img src={Ready}  />
                </button>

        </section>
    )
}

export default Home
