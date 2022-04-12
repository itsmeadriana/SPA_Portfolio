import React from "react";
import avatar from "../../assets/images/Avatars/Home-Office.webp";
// import Flexbox from 'flexbox-react';
import certificate from '../../assets/documents/certificate.pdf';
// import contactAvatar from '../../assets/images/Avatars/working-together.png';

function About() {
    return (
        <div>
            <section className="about-me">
                <img src={avatar} className="mx-2" style={{ width: "45%" }} alt="avatar"></img>
                <div className="about-me text box">
                    <h2>My name is Adriana.</h2>
                    <p>
                       And I build websites.</p>
                        <p>I'm a pandemically-displaced opera-singer-turned-programmer via The Coding Boot Camp at the University of Texas - Austin. Six months and over 30 projects later, I know my way around web development. It wasn't easy, but neither is singing Mozart.</p>
            <p>If you like what you see, let's connect! I'm constantly growing as a developer and am always looking for new technologies and programming languages to learn and add to my repertoire.</p>

                    <p>
                       P.S. <a className="pdfDownload" href={ certificate } target="_blank" rel="noreferrer">
                            I am full-stack certified!
                        </a>
                    </p>
                    {/* <marquee>Please hire me.</marquee> */}
                </div>
            </section>
            {/* <div className="contactImgWrapper box">
            <div className="more-about-me text box">
            <h2 className="more-about-me"> I am full-stack certified!</h2>
            <p className="more-about-me">
            Six months and over 30 projects later, I got to know my way around web development. Undoubtedly, I have a preference for frontend work, but that doesn't mean I can't create some awesome endpoints for you.
            </p>
            </div>
                <img className="contact-img" src={contactAvatar} alt="sitting and singing" />
            </div> */}
        </div>

    );
}

export default About;