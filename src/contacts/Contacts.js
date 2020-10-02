import React from "react";
import style from './Contacts.module.scss';
import Title from "../common/components/title/Title";
import {useFormik} from "formik";
import axios from "axios";

const Contacts = () => {

    const formik = useFormik({
        initialValues: {
            contact: '',
            name: '',
            message: '',
        },
        onSubmit: values => {
            axios.post("http://localhost:3010/sendMessage", {
                contact: values.contact,
                name: values.name,
                message: values.message
            })
                .then(() => {
                    alert("your message has been sent")
                })
        }
    });

    return(
        <div className={style.contactsBlock} id={"contacts"}>
            <div className={style.contactsContainer}>
                <Title title={"Contacts"} />
                <form className={style.form} onSubmit={formik.handleSubmit}>
                    <input
                        className={style.input}
                        placeholder={"your email"}
                        {...formik.getFieldProps("contact")}
                    />
                    <input
                        className={style.input}
                        placeholder={"your name"}
                        {...formik.getFieldProps("name")}
                    />
                    <textarea
                        className={style.textarea}
                        placeholder={"please, write what do you want"}
                        {...formik.getFieldProps("message")}
                    />
                    <button
                        type={'submit'}
                        className={style.button}
                    >
                        send
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contacts;