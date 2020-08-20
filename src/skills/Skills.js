import React from "react";
import style from './Skills.module.css';
import styleContainer from './../common/styles/Container.module.css';
import Skill from "./skill/Skill";

const Skills = () => {
    let des = 'orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim... ';
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`} >
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={'JS'} description={des}/>
                    <Skill title={'CSS'} description={des}/>
                    <Skill title={'React'} description={des}/>
                </div>
            </div>
        </div>
    )
}

export default Skills;