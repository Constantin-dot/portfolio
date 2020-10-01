import React from "react";
import style from './Contacts.module.scss';
import Title from "../common/components/title/Title";
import {useFormik} from "formik";
import axios from "axios";

const Contacts = () => {
    /*let form = document.querySelector("#contact-form")
    form.addEventListener("submit", (e) => {
        e.preventDefault()

        axios.post("http://smtp-nodejs-constantin-server.herokuapp.com/sendMessage", {
            contact: form.querySelector("#contact").value,
            name: form.querySelector("#name").value,
            message: form.querySelector("#message").value
        })
            .then(() => {
                alert("your message has been sent")
            })
    })*/

    const formik = useFormik({
        initialValues: {
            contact: '',
            name: '',
            message: '',
        },
        onSubmit: values => {
            axios.post("http://smtp-nodejs-constantin-server.herokuapp.com/sendMessage", {
                contact: formik.values.contact,
                name: formik.values.name,
                message: formik.values.message
            })
                .then(() => {
                    alert("your message has been sent")
                })
            alert(JSON.stringify(values));
        },
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