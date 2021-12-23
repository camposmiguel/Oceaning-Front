import React from 'react';
import Logo from '../assets/logo-oceaning.png'
import '../styles/Header.css';
import InstaLogo from '../assets/Group 3.svg'
import Arroba from '../assets/@theoceaning.png'


function HeaderBanner() {
    return (
    
        <div className='header'>
            <div className='leftSide'>
                <img src ={Logo} style={{width: "auto", height: "auto", position: 'absolute', top: 86, left: 111}}  />
            </div>
            <div className='rightSide'>
                <img  src={InstaLogo} style={{width: "auto", height: "auto", position: 'absolute', top: 86, left: 1303}} />
                 <img src={Arroba} style={{width: "auto", height: "auto", position: 'absolute', top: 113, left: 1053}} /> 
                
            </div>

        </div>
    
        
    );
}

export default HeaderBanner
