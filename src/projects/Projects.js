import React from "react";
import style from "./Projects.module.scss";
import Project from "./project/Project";
import Title from "../common/components/title/Title";
import socNetImg from "./../assets/image/socNetImg.jpg";
import todoImg from "./../assets/image/todoImg.jpg";


const Projects = () => {
    const socNet = {
        backgroundImage: `url(${socNetImg})`
    }
    const todo = {
        backgroundImage: `url(${todoImg})`
    }

    let des1 = 'orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim... ';
    let des2 = 'adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim... ';

    return (
        <div className={style.projectsBlock} id={"projects"}>
            <div className={style.projectsContainer}>
                <Title title={"Projects"} />
                <div className={style.projects}>
                    <Project
                        style={socNet}
                        title={'Social network'}
                        description={des1}

                    />
                    <Project
                        style={todo}
                        title={'TodoList'}
                        description={des2}
                    />
                </div>
            </div>
        </div>
    )
}

export default Projects;