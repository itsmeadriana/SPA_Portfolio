import React from "react";
import avatar from "../../assets/images/Avatars/Home-Office.png";
// import Flexbox from 'flexbox-react';
import contactAvatar from '../../assets/images/Avatars/sitting-and-singing.png';


function About() {
    return (
        <div>
            <section className="about-me">
                <img src={avatar} className="mx-2" style={{ width: "45%" }} alt="avatar"></img>
                <div className="about-me-text box">
                    <h2>My name is Adriana</h2>
                    <p>
                       and I'm a professional-opera-singer-turned-programmer. I'd like to be a resource to fellow performers in the arts community to help individuals and organizations represent themselves to their audiences at their best. </p><p> I'm a first generation Latinx to a Nicaraguan mother and Puerto Rican father, so I understand the importance of making art accessible, diverse, universal, <i>and</i> personal.</p><p>As artists, your passion is storytelling; let me help you tell yours.
                    </p>
                </div>
            </section>
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
                <img className="contact-img" src={contactAvatar} alt="sitting and singing" />
            </div>
        </div>

    );
}

export default About;