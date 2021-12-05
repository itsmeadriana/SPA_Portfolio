import React, { useEffect } from 'react';
import '../../App.css';
import { capitalizeFirstLetter } from '../../utils/';

function Nav(props) {
    const {
        sections = [],
        setCurrentSection,
        currentSection
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentSection.name);
    }, [currentSection]);

    return(
            <nav className="navlinks">
                <ul className="flex-row">
                    {sections.map((Section) => (
                        <li
                         className={`mx-2 ${currentSection.name === Section.name && 'navActive'
                        }`}
                          key={Section.name}
                        >
                          <span
                            onClick={() => setCurrentSection(Section)}
                        >{capitalizeFirstLetter(Section.name)}
                        </span>
                    </li>
                    ))}
                </ul>
            </nav>
    )
}

export default Nav;