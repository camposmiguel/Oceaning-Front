import React from 'react'
import Logo from '../assets/logo-oceaning.png'
import InstaLogo from '../assets/Group 3.svg'
import Compart from '../assets/COMPARTILHE2.png'
 

function Header() {
    return (
        <section>
            <img src={Logo} style={{position: 'absolute', width: 287.03, height: 32,left: 96,top: 73,}}/>
            <img src={InstaLogo} style={{position: 'absolute', width: 36, height: 36, left: 1323,top: 74,}} />

            <text style={{position: 'absolute', width: 151, height: 30, left: 1151, top: 84,
                          fontFamily: 'Poppins, sans-serif', fontStyle: 'normal', fontWeight: 600,
                          fontSize: 20, textAlign: 'right', color: '#FFFFFF'}}>@theoceaning</text>
            
            <img src={Compart} style={{position: 'absolute', width: 'auto',height: 'auto',left: 1203,top: 66}} />

        </section>
    )
}

export default Header
