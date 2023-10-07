import { Link } from 'react-router-dom'

import styles from './ProjectCard.module.css'
import {BsPencil, BsFillTrashFill} from 'react-icons/bs'
import Loading from '../layouts/Loading'
import Projeto from '../pages/Projeto'
import {useState} from 'react'
import Project from './../pages/Project';

function ProjectCard({id, time, handleRemove}){
    
    const remove = (e) =>{
        e.preventDefault()
        handleRemove(id)
    }
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
    function closeModal(){
        setIsModalOpen(false);
    }
    
    
    return(
        <>
            
            <div className={styles.project_card}>
                <Projeto isOpen={isModalOpen} onClose={closeModal} id={id}/>
                <p  className={styles.category_text}>
                    {time}
                </p>
                <div className={styles.project_card_actions}>
                    <button onClick={openModal}>
                        <BsPencil/> Editar
                        
                    </button>
                    

                    <button onClick={remove}>
                        <BsFillTrashFill/> Excluir
                    </button>
                </div>
            </div>
        </>
        
    )
}
export default ProjectCard
