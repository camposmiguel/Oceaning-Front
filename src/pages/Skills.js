import React, {useState} from 'react'
import '../styles/Texts.css'
import '../styles/Button.css'
import '../styles/Form.css'
import Header from '../components/Header'
import {useNavigate} from 'react-router-dom';
import Axios from 'axios';
import Final from '../assets/Final.png'

const baseURL = 'http://localhost:7000/api'

function Skills() {

    const [inputFields, setInputField] = useState([
        { Habilidade : ''},
    ])

    function postData (){
        Axios.post(`${baseURL}/send`, {
            Nome: localStorage.getItem('usuarioNome'),
            Email: localStorage.getItem('usuarioEmail'),
            Habilidade:localStorage.getItem('usuarioHabilidade') 
        })     
    }

    // //ToRoute
    const history = useNavigate();
    const handleClick = ()=>{        
        history('/success');
    }
    
    const handleSubmit =()=>{
        console.log("inputFields: ", inputFields);
    }
    
    const handleEnvia =() =>{
        handleSubmit();
        postData();
        handleClick();
        
    }


    const handleChangeForm = (index, event)=>{
        const values =[...inputFields];
        values[index][event.target.name] = event.target.value; 
        setInputField(values);
        localStorage.setItem('usuarioHabilidade',event.target.value)

    }

    return (
        <section>
            <Header />
            
                 <text className='textOne' style={{position: 'absolute',width: 'auto',height: 'auto',left: 106,
                                                  top: 242,fontSize: 34,}}>
                                                  Olá {localStorage.getItem('usuarioNome')},</text>
                <text className='textTwo' style={{width: 795,height: 81,left: 106,top: 287,fontWeight: 800,
                              fontSize: 54}}>Quais são suas habilidades?</text>
                <text style={{position: 'absolute',width: 657,height: 68,left: 106,top: 383,
                              fontFamily: 'Poppins, sans-serif',fontStyle: 'normal',fontWeight: 500,
                              fontSize: 22,color: '#78748C'}}>Nos diga como devemos te chamar e qual é o seu e-mail para que possamos te enviar novidades</text>


                <button className='btnBlue' onClick={handleEnvia}   style={{width: 298,height: 66,left: 1061,top: 707,}}>
                    <img src ={Final}/>
                </button>

                    <form className='formName' onSubmit={handleEnvia}>
                        {inputFields.map((inputField, index) => (
                            <div key={index}>
                                <input required
                                       style={{width: 453,height: 60,left: 106,top: 698,
                                               fontFamily: 'Poppins, sans-serif',fontStyle: 'normal',
                                               fontWeight: 600,fontSize: 40,color: '#6A6879'}}
                                       type="text" 
                                       name="Habilidade"
                                       placeholder='Digite uma habilidade'
                                       value={inputFields.Habilidade}
                                       onChange={event => handleChangeForm(index, event)}
                                />
                            </div>
                        
                        ))}
                    

                    </form>        

 
        </section>
    )
}






export default Skills
