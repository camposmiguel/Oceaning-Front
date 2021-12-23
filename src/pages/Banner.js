import React from 'react'
import HeaderBanner from '../components/HeaderBanner'
import '../styles/Texts.css'
import '../styles/Button.css'
import Inscreva from '../assets/Group 2.png'
import Rectangle from '../assets/Rectangle.png'
import Compart from '../assets/COMPARTILHE.png'
import {useNavigate} from 'react-router-dom';

function Banner() {
    
          //ToRoute
          const history = useNavigate();
          const handleClick = ()=>{
              history('/home');
          }
    
    
    return (
    <section>
        <HeaderBanner />
            <section>       
                <text className='textOne'>
                    Developers Oceaning
                </text>
                <text className='textTwo'>
                Faça parte do time de desenvolvimento da agência Oceaning
                </text>
                <text style={{width: 73, height: 60,top:649, left:111,bottom:191,right:1256, position:'absolute', fontStyle: 'normal', 
                              fontWeight:600, fontFamily:'Poppins, sans-serif', fontSize: 60, color: 'white'}}>22</text>
                <text style={{top:649, left:263, position:'absolute', fontStyle: 'normal', 
                              fontWeight:600, fontFamily:'Poppins, sans-serif', fontSize: 60, color: 'white' }}>23</text>
                <text style={{top:649, left:424, position:'absolute', fontStyle: 'normal', 
                              fontWeight:600, fontFamily:'Poppins, sans-serif', fontSize: 60, color: 'white' }}>24</text>
                
                <text className='textDay'>JUN</text>
                <text className='textDay' style={{left:262}}>JUN</text>
                <text className='textDay' style={{left:423}}>JUN</text>
                
                <img  src={Rectangle} style={{position: 'absolute', width:2, height: 126, left: 220, top: 640}} />
                <img  src={Rectangle} style={{position: 'absolute', width:2, height: 126, left: 376, top: 640}} />
                <img  src={Rectangle} style={{position: 'absolute', width:2, height: 126, left: 544 , top: 640}} />

                <text className='textOne' style={{position: 'absolute', width:222, height: 60, left: 595, top: 681,
                                                  fontWeight: 600, fontSize: 58, fontFamily:'Poppins, sans-serif', fontStyle:'normal'}}> 19:00</text>

                <text style={{position: 'absolute', width: 222, height: 60, left: 595, top: 638, fontFamily: 'Poppins, sans-serif',
                              fontStyle: 'normal', fontWeight: 600, fontSize: 27,color: '#B5B2C7'}}> Início da live </text>
            
                <img src={Compart} className='compartilhe'/>

            </section>


            <button className='btnBlue' onClick={handleClick}>
                <img src={Inscreva}  />
            </button>
    </section>
    )
}

export default Banner
