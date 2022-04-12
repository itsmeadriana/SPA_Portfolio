import React from "react";
import gitIcon from '../../assets/images/socialMediaIcons/gitHubIcon.png';
import linkedIcon from '../../assets/images/socialMediaIcons/linkedInIcon.png';
import gmailIcon from '../../assets/images/socialMediaIcons/gmailIcon.png'


function Footer() {
    return(
        <footer className="bookend">
            <h6>&copy; 2022 Adriana Nieves
                <br />
                Made with 💖 in Austin, TX

                </h6>
                <p>
                    <p className="contactWrapper">
                        <a href="https://www.linkedin.com/in/adriananieves" target="_blank"rel="noreferrer">
                            <img src ={linkedIcon} className="icon" alt="icon"/>
                        </a>
                        <a href="https://www.github.com/itsmeadriana" target="_blank" rel="noreferrer">
                            <img src={gitIcon} className="icon" alt="icon" />
                        </a>
                        <a href="mailto:itsmeadriana@gmail.com" target="_blank" rel="noreferrer">
                            <img src={gmailIcon} className="icon" alt="icon" />
                        </a>
                    </p>
                </p>
                <h6>
                    Illustrations by <a className="lenikauffman" href="https://www.lenikauffman.com/" target="_blank" rel="noreferrer">Leni Kauffman</a>.
                </h6>
        </footer>
    );
}

export default Footer;