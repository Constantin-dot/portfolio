import React from "react";
import style from './Main.module.scss';
import avaImg from "./../assets/image/ava.jpg";

const Main = () => {
    const ava = {
        backgroundImage: `url(${avaImg})`
    }
    return (
        <div className={style.mainBlock}>
            <div className={style.mainContainer1}>
                    <div className={style.link}>
                        <a href={'#about'}>About</a>
                    </div>
                    <div className={style.link}>
                        <a href={'#skills'}>Skills</a>
                    </div>
                    <div className={style.link}>
                        <a href={'#projects'}>Projects</a>
                    </div>
                    <div className={style.link}>
                        <a href={'#contacts'}>Contacts</a>
                    </div>
                    <div className={style.link}>
                        <a href={'#footer'}>Links</a>
                    </div>
            </div>
            <div className={style.mainContainer2}>
                <div className={style.text}>
                    <span>Hi There!</span>
                    <h1>I am Constantin Karelin</h1>
                    <p>A Frontend developer</p>
                </div>
                <div className={style.photo} style={ava}>
                </div>
            </div>
        </div>
    );
}

export default Main;