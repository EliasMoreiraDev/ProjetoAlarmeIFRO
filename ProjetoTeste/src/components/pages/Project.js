import { useLocation } from "react-router-dom"
import {useState,useEffect} from 'react'

import Message from "../layouts/Message"
import styles from './Project.module.css'
import Container from '../layouts/Container'
import ProjectCard from "../project/ProjectCard"
import Loading from "../layouts/Loading"
import NoProjects from "../layouts/NoProjects"
import HorarioReal from "../layouts/HorarioReal"
import NewProject from "./NewProject"
import Confirmacao from "../layouts/Confirmacao"
import DiasDeAlarme from "../layouts/DiasDeAlarme"
import BotaoSalvarArduino from "../layouts/BotaoSalavarArduino"
function Project(){
        const [projects, setProjects] = useState([])
        const [removeLoading, setRemoveLoading] = useState(false)
        const [projectMessage, setProjectMessage] = useState('')

        const location = useLocation()
        let message = ''
        if(location.state){
            message = location.state.message
        }

        useEffect(() => {

            setTimeout(() => {
                fetch('http://localhost:5000/projects',{
                    method: 'GET',
                    headers: {
                    'Content-Type': 'application/json'
                }
                }).then(resp => resp.json())
                .then((data) => {
                console.log(data)
                setProjects(data)
                setRemoveLoading(true)
                })
                .catch((err) => console.log(err))
                
                
            }, 1500);
        },[])

        function removeProject(id){
            fetch(`http://localhost:5000/projects/${id}` ,{
                method: 'DELETE',
                headers: {
                    'Content-Type':'application/json'
                },
            }).then(resp => resp.json())
            .then(() =>{
                setProjects(projects.filter((project)=> project.id !== id))
                setProjectMessage('Projeto removido com sucesso!')
            })
            .catch(erro => console.log(erro))
        }
    const [isModalAddOpen, setIsModalAddOpen] = useState(false);

    const openModalAdd = () => {
      setIsModalAddOpen(true)
    }
    function closeModalAdd(){
        setIsModalAddOpen(false);
    }
    const [isModalConfOpen, setIsModalConfOpen] = useState(false);

    const openModalConf = () => {
      setIsModalConfOpen(true);
    };
    function closeModalConf(){
        setIsModalConfOpen(false);
    }
    return(
        <div className={styles.project_container}>
            <HorarioReal/>
            <NewProject onClose={closeModalAdd} isOpen={isModalAddOpen}/>
            
            {/*onConfirm deve ser substituido pela ação de tocar a sirene*/}
            <Confirmacao isOpen={isModalConfOpen} onClose={closeModalConf} onConfirm={closeModalConf} text={"Deseja tocar a sirene agora?"}/>

            <div className={styles.title_container}>
                <div className={styles.caixaBotoes}>
                    <button className={styles.botaoCriar} onClick={openModalAdd}>Adicionar Horario</button>
                    <button className={styles.botaoTocarAgora} onClick={openModalConf}>Tocar Agora</button>
                </div>
                <DiasDeAlarme/>
                <h1>Alarmes</h1>
            </div>
            
            {message && 
                <Message type='success' msg={message}/>
            }
            {projectMessage && 
                <Message type='success' msg={projectMessage}/>
            }
            <Container customClass='column'>
                {projects.length > 0 &&
                    projects.map((project) => (
                        <ProjectCard id={project.id} key={project.id}  time={project.time}  handleRemove={removeProject}/>
                        
                    ))}

                    {!removeLoading && <Loading/>}
                    
                    {removeLoading && projects.length===0 &&(
                        <NoProjects/>
                    )}
            </Container>
            <BotaoSalvarArduino/>
        </div>
    )
}

export default Project