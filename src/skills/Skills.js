import React from "react";
import style from './Skills.module.scss';
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faJs} from '@fortawesome/free-brands-svg-icons';
import {faCss3} from '@fortawesome/free-brands-svg-icons';
import {faReact} from '@fortawesome/free-brands-svg-icons';


const Skills = () => {
    let des = 'orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim... ';
    return (
        <div className={style.skillsBlock} id={"skills"}>
            <div className={style.skillsContainer}>
                <Title title={"Skills"} />
                <div className={style.skills}>
                    <Skill title={'JS'} description={des} icon={<FontAwesomeIcon icon={faJs}/>}/>
                    <Skill title={'CSS3'} description={des} icon={<FontAwesomeIcon icon={faCss3}/>}/>
                    <Skill title={'React'} description={des} icon={<FontAwesomeIcon icon={faReact}/>}/>
                    <Skill title={'Redux'} description={des}/>
                    <Skill title={'TypeScript'} description={des}/>
                </div>
            </div>
        </div>
    )
}

export default Skills;