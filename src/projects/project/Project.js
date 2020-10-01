import React from "react";
import style from './Project.module.scss';

const Project = (props) => {
    return (
        <div className={style.project}>
            <div className={style.icon} style={props.style}>
                {/*<a className={style.button}>see more</a>*/}
                {/*<img src={props.image} width={"100%"} height={"300px"} alt={"image"}/>*/}
                <button className={style.button}>see</button>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.projectTitle}>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>
        </div>
    )
}

export default Project;