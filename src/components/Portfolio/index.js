import React, { useState } from 'react';
import '../../App.css';
import Project from '../Project';

function Portfolio() {
    const [currentProject, setCurrentProject] = useState();
    const [projects] = useState([
        {
          name: "Austin Movie Gear",
          description:
            "MERN Stack",
            link: "https://polar-lowlands-07100.herokuapp.com",
            repo: "https://github.com/kimcc/atx-movie-gear"
        },
        { name: "Gripe Support", description: "Handlebars, SQL, PaperCSS, JavaScript",
        link: "https://infinite-bayou-42393.herokuapp.com/",
        repo: "https://github.com/itsmeadriana/Gripe-Support" },
        { name: "Soundtracker", description: "HTML, CSS, APIs, Bulma, jQuery, JavaScript",
        link: "https://itsmeadriana.github.io/Soundtracker/",
        repo: "https://github.com/itsmeadriana/Soundtracker" },
        {
          name: "ReadMe Generator",
          description: "JavaScript, Node.js, Inquirer.js",
          link: "https://github.com/itsmeadriana/readme-generator/",
          repo: "https://github.com/itsmeadriana/readme-generator",
        },
        {
          name: "Take Notes",
          description: "JavaScript, HTML, CSS, ES6, Bootstrap, Node.js, Express.js, Jest.js",
          link: "https://github.com/itsmeadriana/take-notes",
          repo: "https://github.com/itsmeadriana/take-notes",
        },
        {
          name: "JavaScript Jeopardy",
          description: "JavaScript, HTML, CSS",
          link: "https://itsmeadriana.github.io/JavaScriptJeopardy/",
          repo: "https://github.com/itsmeadriana/JavaScriptJeopardy",
        }
      ]);

      const projectImage = (image, i) => {
          setCurrentProject=({...image, index: i});
      }

    return(
        <div className="flex-row portfolioWrapper">
            {projects.map((project, idx) => (
                <Project currentProject={project}/>
            ))}
        </div>
    );
}

export default Portfolio;