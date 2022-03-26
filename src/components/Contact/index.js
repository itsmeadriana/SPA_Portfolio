import React from 'react';
import contactAvatar from '../../assets/images/Avatars/working-together.png';
import OpenCertificateModal from '../CertificateModal';

function Contact() {


    return(
        <div className="container">

            <div className="contactImgWrapper box flex-row">
            <div className="contact-me text box">
                <OpenCertificateModal />

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

        </div>
    )
};

export default Contact;