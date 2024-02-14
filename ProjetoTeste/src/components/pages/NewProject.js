import styles from './NewProject.module.css'

import ProjectForm from '../project/ProjectForm'

import { useNavigate } from 'react-router-dom'


function NewProject({ isOpen, onClose }){

    const history = useNavigate()

    function createPost(project){
 

        fetch('http://localhost:5000/projects',{
            method: 'POST',
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify(project)
        }).then(resp => resp.json())
        .then((data)=>{
            console.log(data)
            window.location.reload();
            history('/projects', { state: { message: 'Projeto criado com sucesso!'}})
        })
        .catch(erro => console.log(erro))
        
    }
    if (!isOpen) return null;
    return(
        <div className={styles.caixa_newProject}>
            <div className={styles.modal_overlay}>
                <div className={styles.modal}>
                    <h1 className={styles.titulo}>Criar Alarme</h1>
                    <ProjectForm handleSubmit={createPost} onClose={onClose} textobtn='Criar projeto'/>
                </div>
            </div>
        </div>
    )
}

export default NewProject