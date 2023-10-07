import { Link } from "react-router-dom"

import Container from "./Container"
import Login from "../pages/Login"
import styles from './NavBar.module.css'
import logo from '../../imagens/Logo-Nav.png'


function NavBar(){

    function openLogin(){
        return (<Login/>)
    }
    return(
        <nav className={styles.navbar}>
            
            <div className={styles.titulo}>Sistema de Controle de Alarmes</div>
                
                <Link to='/'>
                        <img src={logo} alt='Costs' className={styles.logo}/>
                    </Link>
            
        </nav>
    )
}
export default NavBar