import React from "react";
import avatar from "../../assets/images/Avatars/Home-Office.png";
// import Flexbox from 'flexbox-react';
import contactAvatar from '../../assets/images/Avatars/sitting-and-singing.png';


function About() {
    return (
        <div>
            <section className="about-me">
                <img src={avatar} className="mx-2" style={{ width: "45%" }} alt="avatar"></img>
                <div className="about-me text box">
                    <h2>My name is Adriana</h2>
                    <p>
                       and I'm a professional-opera-singer-turned-programmer. I'd like to be a resource to fellow performers in the arts community to help individuals and organizations represent themselves to their audiences at their best. </p><p>I understand the importance of making art accessible, diverse, universal, <i>and</i> personal.</p><p>As artists, your passion is storytelling; let me help you tell yours.
                    </p>
                </div>
            </section>
            <div className="contactImgWrapper box">
            <div className="more-about-me text box">
            <h2 className="more-about-me"> I am full-stack certified!</h2>
            <p className="more-about-me">
            Six months and over 30 projects later, I got to know my way around web development. Undoubtedly, I have a preference for frontend work, but that doesn't mean I can't create some awesome endpoints for you.
            </p>
            </div>
                <img className="contact-img" src={contactAvatar} alt="sitting and singing" />
            </div>
        </div>

    );
}

export default About;