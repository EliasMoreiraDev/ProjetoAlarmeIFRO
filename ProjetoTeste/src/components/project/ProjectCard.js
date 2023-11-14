import { Link } from 'react-router-dom'

import styles from './ProjectCard.module.css'
import {BsPencil, BsFillTrashFill, BsTypeH1} from 'react-icons/bs'
import Loading from '../layouts/Loading'
import Projeto from '../pages/Projeto'
import {useState} from 'react'
import Confirmacao from '../layouts/Confirmacao'

function ProjectCard({id, time, handleRemove}){
    
    const remove = (e) =>{
        e.preventDefault()
        handleRemove(id)
    }
    const [isModalEditOpen, setIsModalEditOpen] = useState(false);

    const openModalEdit = () => {
      setIsModalEditOpen(true);
    };
    function closeModalEdit(){
        setIsModalEditOpen(false);
    }

    const [isModalConfOpen, setIsModalConfOpen] = useState(false);

    const openModalConf = () => {
      setIsModalConfOpen(true);
    };
    function closeModalConf(){
        setIsModalConfOpen(false);
    }
    
    
    return(
        <>
            
            <div className={styles.project_card}>
                <Projeto isOpen={isModalEditOpen} onClose={closeModalEdit} id={id}/>

                <Confirmacao isOpen={isModalConfOpen} onClose={closeModalConf} onConfirm={remove} text={"Deseja excluir o horário?"}/>
                
                <h1  className={styles.category_text}>
                    {time}
                </h1>
                <div className={styles.project_card_actions}>
                    <button onClick={openModalEdit} className={styles.button_edit}>
                        <BsPencil/> Editar     
                    </button>
                    <button onClick={openModalConf} className={styles.button_remove}>
                        <BsFillTrashFill/> Excluir
                    </button>
                </div>
            </div>
        </>
        
    )
}
export default ProjectCard
