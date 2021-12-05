import React from "react";
import avatar from "../../assets/images/Avatars/Home-Office.png";
// import Flexbox from 'flexbox-react';


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
        </div>

    );
}

export default About;