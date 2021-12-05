import React, { useState } from 'react';
import { validateEmail } from '../../utils';
import contactAvatar from '../../assets/images/Avatars/sitting-and-singing.png';

function Contact() {
    const [formState, setFormState] = useState({name: '', email: '', message: ''});
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    function handleChange(event) {
        if(event.target.name === 'email') {
            const isValid = validateEmail(event.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage('Email invalid');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!event.target.value.length) {
                setErrorMessage(`${event.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({...formState, [event.target.name]: event.target.value })
            console.log('errorMessage', errorMessage)
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(formState);
    }

    return(
        <div className="container">
            <div className="contactImgWrapper box">
                <div>
            <h5 className="contact-me-text"> If you like what you see, let's connect! I'm still growing as a developer and I'd love to
                        help you
                        grow your project, too!</h5>
                        <br />
                        <ul className="contactList"><h5> Find me on: </h5>
                            <li><h5>
                                <a href="https://www.linkedin.com/in/adriananieves">
                                Linked-In
                                </a>
                                </h5>
                            </li>
                            <li><h5>
                                <a href="https://www.github.com/itsmeadriana">
                                GitHub
                                </a>
                                </h5>
                            </li>
                        </ul>
                    </div>
                <img className="contact-img" src={contactAvatar} />
            </div>
            <div className="formWrapper container">
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
            </div>

        </div>
    )
};

export default Contact;