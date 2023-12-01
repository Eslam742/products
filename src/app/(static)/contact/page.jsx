"use client"
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

import { useRef } from 'react';
import emailjs from '@emailjs/browser';



const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_5xfgxd8', 'template_dnyyk4y', form.current, '2le3LLu4oSbyDjDF9')
            .then((result) => {
                console.log(result.text);
            }, (error) => {

            });
    };

    return ( <
        div className = { styles.container } >
        <
        h1 className = { styles.title } > Lets Keep in Touch < /h1> <
        div className = { styles.content } >
        <
        div className = { styles.imgContainer } >
        <
        Image src = "/contact.png"
        alt = "eslam reda"
        fill = { true }
        className = { styles.image }
        /> <
        /div> <
        form className = { styles.form }
        ref = { form }
        onSubmit = { sendEmail } >
        <
        input type = "text"
        name = "from_name"
        placeholder = "name"
        className = { styles.input }
        /> <
        input type = "email"
        name = "from_name"
        placeholder = "email"
        className = { styles.input }
        /> <
        textarea className = { styles.textArea }
        placeholder = "message"
        name = "message"
        cols = "30"
        rows = "10" >
        < /textarea> <
        button style = {
            {
                padding: "20px",
                cursor: "pointer",
                backgroundColor: "rgb(33, 142, 185)",
                border: "none",
                borderRadius: " 5px",
                width: "max-content",
                color: " white"
            }
        }
        type = "submit"
        value = "Send"
        onClick = {
            () => { window.location.pathname = "/" } } > send < /button> <
        /form> <
        /div> <
        /div>
    );
};

export default Contact;