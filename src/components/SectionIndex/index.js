import React from "react";
import About from "../About";
import Contact from '../Contact';
import Portfolio from "../Portfolio";
import Resume from '../Resume';
import SectionContent from '../SectionContent';
import { capitalizeFirstLetter } from "../../utils";

function Section({ currentSection }) {

    const displaySection = () => {
        switch (currentSection.name) {
            case 'About':
                return <About />;
            case 'Contact':
                return <Contact />;
            case 'Portfolio':
                return <Portfolio />;
            case 'Resume':
                return <Resume />;
            default: return <About />;
        }
    };

    return(
        <div>
            <h2>
                {capitalizeFirstLetter(currentSection.name)}
            </h2>
            <SectionContent>
                {displaySection()}
            </SectionContent>
        </div>
    );
}

export default Section;