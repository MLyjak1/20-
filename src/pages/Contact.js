import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const styles = {
    divStyle: {
        width: "100%",
        // display: "flex",
        height: "80vh"
    },
    formStyle: {
        border: "1px solid black",
        display: "flex",
        flexDirection: "column",
        height: "30vh",
        justifyContent: "space-around",
        alignItems: "center"
    },
    testBord:{
        // border: "3px solid red"
    }
}
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('mlyjaksprofilesite', 'template_56azzln', form.current, '7yhA55acsyVzsx2id')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div style={styles.divStyle}>
            <form ref={form} onSubmit={sendEmail} style={styles.formStyle}>
                <div style={styles.testBord}>
                    <label>Name</label>

                    <input type="text" name="user_name" />

                </div>
                <div style={styles.testBord}>
                    <label>Email</label>
                    <input type="email" name="user_email" />
                </div>
                <div style={styles.testBord}>
                    <label>Message</label>
                    <textarea name="message" />
                </div>
                <div style={styles.testBord}>
                <input type="submit" value="Send" />
                </div>
            </form>
        </div>
    );
};

export default Contact;