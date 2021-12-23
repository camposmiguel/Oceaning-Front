import React from 'react'
import Header from '../components/Header'
import {useNavigate} from 'react-router-dom';
import '../styles/Texts.css'
import '../styles/Button.css'
import Ver from '../assets/Ver todos.png'
import Axios from 'axios';


function Success() {
    

    //ToRoute
    const history = useNavigate();
    const handleClick = ()=>{        
        history('/devlist');
    }

    const handleEnvia =() =>{
        handleClick();
    }

 
    return (
        <section>
            <Header />
            <text className ='textOne' style={{position: 'absolute', width: 'auto',height: 87,left: 563,top: 284,
                                               fontWeight: 800,fontSize: 58,textAlign: 'center'}}> 
                                               Parabéns!</text>
            <text className='textTwo' style={{position: 'absolute',width: 1162,height: 78,left: 139,top: 371,
                                              fontWeight: 800,fontSize: 60,textAlign: 'center'}}>
                                              Suas habilidades foram enviadas</text>
            <text style={{position: 'absolute',width: 690,height: 68,left: 375,top: 472,
                          fontFamily: 'Poppins, sans-serif',fontStyle: 'normal',fontWeight: 500,
                          fontSize: 20,textAlign: 'center',color: '#78748C'}}>
                          Faça parte dessa jornada junto com a Oceaning e conquiste o mundo com suas habilidades de programação.</text>
        
            <button className='btnBlue' onClick={handleEnvia} style={{position: 'absolute',width: 291,height: 70,left: 575,top: 684,
                                                background: '#201F26'}}>
                <img src={Ver}/>
            </button>
        
        </section>
    )
}

export default Success
