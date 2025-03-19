import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Message from "../layout/Message";
import styles from "./Projects.module.css";
import Container from "../layout/Container";
import Loading from "../layout/Loading";
import ProjectCard from "../project/ProjectCard";
import LinkButton from "../layout/LinkButton";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);
  const [projectMessage, setProjectMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("http://localhost:5000/projects", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setProjects(data);
        setRemoveLoading(true);
      } catch (err) {
        console.error(err);
        setErrorMessage("Falha ao carregar os projetos. Tente novamente mais tarde.");
        setRemoveLoading(true);
      }
    };

    fetchProjects();
  }, []);

  function removeProject(id) {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then(() => {
        setProjects(projects.filter((project) => project.id !== id));
        setProjectMessage("Projeto removido com sucesso!");
      })
      .catch((err) => {
        console.error(err);
        setErrorMessage("Erro ao remover o projeto. Tente novamente.");
      });
  }

  return (
    <div className={styles.project_continer}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to="/newproject" text="Novo projeto" />
      </div>

      {message && <Message type="success" msg={message} />}
      {projectMessage && <Message type="success" msg={projectMessage} />}
      {errorMessage && <Message type="error" msg={errorMessage} />}
      
      <Container customClass="start">
        {projects.length > 0 ? (
          projects.map((project) => (
            <ProjectCard
              id={project.id}
              name={project.name}
              budget={project.budget}
              category={project.category ? project.category.name : "Categoria não definida"}
              key={project.id}
              handleRemove={removeProject}
            />
          ))
        ) : !removeLoading ? (
          <Loading />
        ) : (
          <p>Não há projetos cadastrados!</p>
        )}
      </Container>
    </div>
  );
}

export default Projects;
