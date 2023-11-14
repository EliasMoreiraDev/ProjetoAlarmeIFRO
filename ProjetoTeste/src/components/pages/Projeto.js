
import styles from './Projeto.module.css'
import {useState, useEffect} from 'react'
import ProjectForm from '../project/ProjectForm'

function Projeto({isOpen, onClose, id}){
    const [project, setProject] = useState([]) 
    const [message, setMessage] = useState()
    const [type, setType] = useState()

     
    useEffect(() =>{

        setTimeout(() => {
            fetch(`http://localhost:5000/projects/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            }).then(resp => resp.json())
            .then((data)=>{
                setProject(data)
                
            })
            .catch(erro => console.log(erro))
            },1500)
    },[id])

    function editPost(project){
        
        setMessage('')

        fetch(`http://localhost:5000/projects/${project.id}`,{
            method:'PATCH',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(project),
        })
        .then(resp => resp.json())
        .then((data) => {
            window.location.reload();
            setProject(data)
            setMessage('Projeto atualizado!')
            setType('success')
            onClose()
        })
        .catch(erro => console.log(erro))
    }  
    if(!isOpen){return null;}
    return(  
        <>
            <div className={styles.modal_overlay}>
                <div className={styles.modal}>
                
                <div>
                    <ProjectForm handleSubmit={editPost} projectdate={project}/>
                </div>
                
                </div>
            </div>
        </>
    )
}

export default Projeto

    
