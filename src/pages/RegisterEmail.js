import React, {useState, Component} from 'react';
import Header from '../components/Header';
import '../styles/Texts.css';
import '../styles/Button.css';
import '../styles/Form.css'
import Continue from '../assets/continue.png';
import {useNavigate} from 'react-router-dom';


function RegisterEmail() {

    const [inputFields, setInputField] = useState([
        { Email: ''},
    ])
    
    //ToRoute
    const history = useNavigate();
    const handleClick = ()=>{        
        history('/skills');
    }

    const handleEnvia =() =>{
        handleSubmit();
        handleClick();
    }
    const handleSubmit =()=>{
        console.log("inputFields: ", inputFields);
        

    }

    const handleChangeFormReg = (index, event)=>{
        const values =[...inputFields];
        values[index][event.target.name] = event.target.value; 
        setInputField(values);
        localStorage.setItem('usuarioEmail',event.target.value) 
    }

    return (
        <section>
            <Header/>

                
                <text className='textOne' style={{position: 'absolute', width: 'auto', height: 'auto',left: 106,
                                                  top: 322,fontSize: 34,}} > Vamos começar </text>
                <text className='textTwo' style={{position: 'absolute', width: 'auto', height: 'auto', left: 106,
                                                  top: 367,fontSize: 54,}} > Como devemos te chamar? </text>
                <text style={{position: 'absolute',width: 657,height: 68,left: 106,top: 463,
                              fontFamily: 'Poppins',fontStyle: 'normal',fontWeight: 500,fontSize: 22,
                              color: '#78748C'}}>Nos diga como devemos te chamar e qual é o seu e-mail para que possamos te enviar novidades</text>


                
                <button className='btnBlue' onClick ={handleEnvia}  style={{position: 'absolute', width: 298,height: 66,left: 1061,top: 707,}}>
                    <img src={Continue}/>
                </button>

                    <form className='formName' onSubmit={handleEnvia}>
                        {inputFields.map((inputField, index) => (
                            <div key={index}>
                                <input required
                                       style={{width: 683,height: 60,left: 106,top: 698,
                                               fontFamily: 'Poppins, sans-serif',fontStyle: 'normal',
                                               fontWeight: 600,fontSize: 40,color: '#6A6879'}}
                                       type="email" 
                                       name="Nome"
                                       placeholder='Digite seu email'
                                       value={inputFields.Email}
                                       onChange={event => handleChangeFormReg(index, event)}
                                />

                            </div>
                        
                        ))}
                    

                    </form>  

                      



        </section>
         
    )
}

export default RegisterEmail 
