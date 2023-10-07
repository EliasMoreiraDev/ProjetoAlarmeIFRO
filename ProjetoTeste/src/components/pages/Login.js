import React, { useState } from 'react';
import Project from './Project';
import Input from './../form/Input';
import styles from './Login.module.css'
import Submit from '../form/Submit';
import {VscKey, VscAccount} from 'react-icons/vsc'
import { useNavigate } from 'react-router-dom';
const Login = () => {
 
    const navigate = useNavigate()
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    function handleSubmit(e){
      e.preventDefault();
      if (username === 'Elias' && password === '123') {
        console.log('Usuario e senha corretos')
        console.log({username},{password})
        navigate("/projects")
      } else {
        alert('Credenciais inválidas');
      }
    }
    return (
      <>
        <div className={styles.container}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <h2 className={styles.tituloLogin}>Login</h2>
                  <div className={styles.campo}>
                    <VscAccount className={styles.icon}/>
                    <input type="text" className={styles.input} placeholder="Digite seu nome de usuário" onChange={(e)=> setUsername(e.target.value)}/>
                  </div>
                  <div className={styles.campo}>
                      <VscKey className={styles.icon}/>
                      <input type="password" className={styles.input} placeholder="Digite sua senha" onChange={(e)=> setPassword(e.target.value)}/>
                  </div>
                  <input type="submit" value="Entrar" className={styles.btn_Entrar} />
                  
          </form>

          
        </div>
      </>
    );
  };
  
  export default Login;