import React from "react";
import style from './Projects.module.css';
import styleContainer from './../common/styles/Container.module.css';
import Project from "./project/Project";

const Projects = () => {
    let des = 'orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim... ';

    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>Projects</h2>
                <div className={style.projects}>
                    <Project title={'Social network'} description={des}/>
                    <Project title={'TodoList'} description={des}/>
                </div>
            </div>
        </div>
    )
}

export default Projects;