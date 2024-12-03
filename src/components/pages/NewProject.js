import styles from './NewProject.module.css'
import ProjectForm from '../project/ProjectForm'
import { useNavigate } from 'react-router'

function NewProject(){
    const navigate = useNavigate()

    function createPost(project){
        project.cost =  0
        project.services = []
        fetch("http://localhost:5000/projects", {
            method: 'POST',
            headers:{
                'content-type': 'application/json',
            },
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) =>{
            navigate('/projects', { state: { message: 'Projeto criado com sucesso!' } })
        })
        .catch((err) => console.log(err))
    }
    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Criae seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar projeto"/>
        </div>
    )

}
export default NewProject