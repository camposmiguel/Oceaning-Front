import React, {useState, useEffect} from 'react'
import '../styles/Texts.css'
import '../styles/Button.css'
import '../styles/Form.css'
import Header from '../components/Header'
import {useNavigate} from 'react-router-dom';
import Axios from 'axios';
import back from '../styles/Backdev.css'
import Adicionar from '../assets/Adicionar.png'
import '../styles/Texts.css'

const baseURL = 'http://localhost:7000/api'




function Devlist() {
 
    const [userData, setUserData] = useState([]);

    function testeDados(){
        console.log(userData)
    }

    const getDataBD  = () =>{
        Axios.get(`${baseURL}/send`).then((response) => {
            setUserData(response.data)

        })
    }

    //ToRoute
    const history = useNavigate();
    const handleClick = ()=>{        
        history('/skills');
    }
   
useEffect(() =>{
    getDataBD();
}, [])
           
    return (
        <section>
             <Header />
                
             <button className='btnBlue' onClick={getDataBD}  style={{position: 'absolute', width: 298,height: 66,left: 1061,top: 181,}}>
                    <img src={Adicionar} />
                </button>

            <text className='textOne' style={{position: 'absolute',width: 'auto',height: 'auto',left: 90,top: 206, fontSize:30}}>{userData.length} desenvolvedores encontrados</text>


        <div className='back'>
        <section>

             <table >
                {
                    userData.map(user =>{
                        return(
                            <section>

                                <tr>

                                <td className='nameTable' style={{paddingLeft:96, textAlign:'left', width:224, position:'absolute'}} >{user.nome}</td>
                                <td className='emailTable' style={{paddingLeft: 358, textAlign:'left', width:328,}}  >{user.email}</td>
                                <td className='emailTable' style={{paddingLeft: 686, textAlign:'left', width:328}}  >{user.habilidade}</td>
                                {/* <td>{userData.length}</td> */}
                                </tr>
                            </section>


                        )
                    })
                }
            

            </table>


        </section>
        </div>
        </section>
    )
}


export default Devlist
