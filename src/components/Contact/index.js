import React from 'react';
import contactAvatar from '../../assets/images/Avatars/working-together.png';
import certificate from '../../assets/documents/certificate.pdf';
import gitIcon from '../../assets/images/socialMediaIcons/gitHubIcon.png';
import linkedIcon from '../../assets/images/socialMediaIcons/linkedInIcon.png';
import gmailIcon from '../../assets/images/socialMediaIcons/gmailIcon.png'

function Contact() {

    return(
        <div className="container">

            <div className="contactImgWrapper box flex-row">
            <div className="contact-me text box">
            <h2 className="contact-header" >
                Find me on:
            </h2>

                    <ul className="contactList">
                        <li><p>
                            <a href="https://www.linkedin.com/in/adriananieves" target="_blank" rel="noreferrer">
                            <img src ={linkedIcon} className="icon-contact" alt="icon"/>
                            </a>
                            <a href="https://www.github.com/itsmeadriana" target="_blank" rel="noreferrer">
                           <img src={gitIcon} className="icon-contact" alt="icon" />
                            </a>
                            <a href="mailto:itsmeadriana@gmail.com" target="_blank"rel="noreferrer">
                           <img src={gmailIcon} className="icon-contact" alt="icon" />
                            </a>
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="contactImgWrapper box flex-row">
                    <img className="contact-img" src={contactAvatar} alt="working-together" rel="noreferrer"/>
                </div>
            </div>
        </div>
    )
};

export default Contact;