import React from "react";
import style from './Skill.module.scss';


const Skill = (props) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}>{props.icon}</div>
            <h3 className={style.skillTitle}>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    )
}

export default Skill;