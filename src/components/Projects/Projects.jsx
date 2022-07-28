import React from "react";
import { Typography, Button } from "@mui/material";
import "./Projects.css";
import { AiOutlineProject } from "react-icons/ai";
import { Delete } from "@mui/icons-material";
import { FaRegSmileWink } from "react-icons/fa";

function Projects() {
  const ProjectCard = ({
    url,
    projectImage,
    projectTitle,
    description,
    technologies,
    isAdmin = false,
  }) => {
    return (
      <>
        <a href={url} className="projectCard" target="black">
          <div>
            <img src={projectImage} alt="Project" />
            <Typography variant="h5">{projectTitle}</Typography>
          </div>
          <div>
            <Typography variant="h4">Abouts Projects</Typography>
            <Typography>{description}</Typography>
            <Typography variant="h6">Tech Stack:{technologies}</Typography>
          </div>
        </a>
        {isAdmin && (
          <Button style={{ color: "rgba(40,40,40,0.7)" }}>
            <Delete />
          </Button>
        )}
      </>
    );
  };

  const projects = [1];
  return (
    <div className="projects">
      <Typography variant="h3">
        Projects
        <AiOutlineProject />
      </Typography>
      <div className="projectsWrapper">
        {projects.map((project, index) => (
          <ProjectCard
            url="https://food-api-usingcontext.netlify.app/"
            projectImage="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Screen-Shot-2018-10-13-at-5.12.58-PM.png_3669089199.png"
            projectTitle="Food ordering portal"
            description="In the Dashbord is two components one of the pizza and another is Burger there will be order pizza and burger"
            technologies="HTML CSS Javascript,React ,Nodejs,Bootstrap"
          />
        ))}

        {projects.map((project, index) => (
          <ProjectCard
            url="https://admin-authentication.netlify.app/"
            projectImage="https://www.positronx.io/wp-content/uploads/2019/09/react-login-ui-6748-02.png"
            projectTitle="Admin login and signup aothentication"
            description="In the Dashbord farst  signup then you go to the login panel and there will be  login your with email id and password then after sometime season time out and you automatic logout "
            technologies="HTML CSS Javascript,React ,Nodejs,Express js ,Mongodb,Bootstrap"
          />
        ))}

        {projects.map((project, index) => (
          <ProjectCard
            url="https://crud-operations-formik.netlify.app/"
            projectImage="https://res.cloudinary.com/practicaldev/image/fetch/s--T_G8FjMz--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/fx2fni0aqudeaubuach9.png"
            projectTitle="CRUDE opration"
            description="In the Dashbord is two components one of the AddStudent and another one is All Student there will be we have delete,update and add this kind of operation do that."
            technologies="HTML CSS Javascript,React ,Bootstrap"
          />
        ))}

        {projects.map((project, index) => (
          <ProjectCard
            url="https://todo-items1.netlify.app/"
            projectImage="https://miro.medium.com/max/1400/1*9033jqLdN91zKYu64OLfug.png"
            projectTitle="TODO LIST"
            description="Thare will be add the todo items and see the all todo and also categorise the all todo"
            technologies="HTML CSS Javascript,React ,Mongodb ,NodeJs NodeExpress"
          />
        ))}
        {projects.map((project, index) => (
          <ProjectCard
            url="https://zen-elion-f407d1.netlify.app/"
            projectImage="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/StackOverflow.com_Top_Questions_Page_Screenshot.png/1200px-StackOverflow.com_Top_Questions_Page_Screenshot.png"
            projectTitle="Stackoverflow"
            description="stackoverflow clone"
            technologies="HTML CSS Javascript,React "
          />
        ))}
      </div>
      <Typography variant="h3" style={{ font: "100 1.2rem 'Ubuntu Mono'" }}>
        All The projects Shown Above Are Made By Me <FaRegSmileWink />
      </Typography>
    </div>
  );
}

export default Projects;
