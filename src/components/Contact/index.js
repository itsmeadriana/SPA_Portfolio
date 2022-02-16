// import React, { useState } from 'react';
// import { validateEmail } from '../../utils';
import contactAvatar from '../../assets/images/Avatars/working-together.png';

function Contact() {
    // const [formState, setFormState] = useState({name: '', email: '', message: ''});
    // const [errorMessage, setErrorMessage] = useState('');
    // const { name, email, message } = formState;

    // function handleChange(event) {
    //     if(event.target.name === 'email') {
    //         const isValid = validateEmail(event.target.value);
    //         console.log(isValid);
    //         if (!isValid) {
    //             setErrorMessage('Email invalid');
    //         } else {
    //             setErrorMessage('');
    //         }
    //     } else {
    //         if (!event.target.value.length) {
    //             setErrorMessage(`${event.target.name} is required.`);
    //         } else {
    //             setErrorMessage('');
    //         }
    //     }
    //     if (!errorMessage) {
    //         setFormState({...formState, [event.target.name]: event.target.value })
    //         console.log('errorMessage', errorMessage)
    //     }
    // }

    // function handleSubmit(event) {
    //     event.preventDefault();
    //     console.log(formState);
    // }

    return(
        <div className="container">

            <div className="contactImgWrapper box flex-row">
            <div className="contact-me text box">
                <h2 className="contact-header"> I am full-stack certified!</h2>
            <p> Six months and over 30 projects later, I got to know my way around web development. Undoubtedly, I have a preference for frontend work, but that doesn't mean I can't create some awesome endpoints for you.</p>
            <br />
            <p>If you like what you see, let's connect! I'm still growing as a developer and I'd love to help you grow your project, too!</p>
                        <br />
                        <ul className="contactList"><p> Find me on: </p>
                            <li><p>
                                <a href="https://www.linkedin.com/in/adriananieves">
                                Linked-In
                                </a>
                                </p>
                            </li>
                            <li><p>
                                <a href="https://www.github.com/itsmeadriana">
                                GitHub
                                </a>
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="contactImgWrapper box flex-row">
                <img className="contact-img" src={contactAvatar} alt="working-together"/>


            </div>

            </div>
            {/* <div className="formWrapper container">
                <form id="contact-form" onSubmit={handleSubmit}>
                    <div className="inputRow">
                        <label htmlFor="name" defaultValue={name} name="name">Name: </label>
                        <input type="text" name="name" onBlur={handleChange} />
                    </div>
                    <div className="inputRow">
                        <label htmlFor="email" defaultValue={email} name="email" >Email: </label>
                        <input type="email" name="email" onBlur={handleChange} />
                    </div>
                    <div className="inputRow">
                        <label htmlFor="message">Message: </label>
                        <textarea name="message-text" defaultValue={message} onBlur={handleChange} />
                        {errorMessage && (
                            <div>
                                <p className="errorMessage-text">{errorMessage}</p>
                            </div>
                        )}
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div> */}

        </div>
    )
};

export default Contact;