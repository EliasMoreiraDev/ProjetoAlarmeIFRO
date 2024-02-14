import {useState, useEffect} from 'react'

import styles from './ProjectForm.module.css'
import SubmitStyles from '../form/Submit.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import Submit from '../form/Submit'
import Project from '../pages/Project'


function ProjectForm({handleSubmit,textobtn, projectdate, onClose}){
 
    const[project, setProject] = useState(projectdate || {})

    const submit =(e) =>{
        e.preventDefault()
        handleSubmit(project)
        onClose()
    }
    function handleChange(e){
        setProject({...project, 
            [e.target.name]: e.target.value,
            ativo: false
        })
    }
    return(
        <form>
            <Input type='time' text='Hora do Alarme' name='time' handleOnChange={handleChange}/> 
            <div className={styles.container_btn}>
                <Submit text="Cancelar" onClick={onClose} style={SubmitStyles.btn_cancelar}/>
                <Submit text="Confirmar" onClick={submit} style={SubmitStyles.btn_confirmar}/>
                
            </div> 
            
            
        </form>
    )
}
export default ProjectForm