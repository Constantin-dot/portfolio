import React from "react";
import styleContainer from './../common/styles/Container.module.css';
import style from './Contacts.module.css';

const Contacts = () => {
    return(
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2>Contacts</h2>
                <form className={style.form}>
                    <input className={style.input}/>
                    <input className={style.input}/>
                    <textarea className={style.textarea}/>
                </form>
                <button className={style.button}>send</button>
            </div>
        </div>
    )
}

export default Contacts;