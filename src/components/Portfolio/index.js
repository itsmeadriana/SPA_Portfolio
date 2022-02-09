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
            repo: "https://github.com/kimcc/atx-movie-gear",
            about: "A re-imagined version of a rental reservation site for a local media equipment business."
        },
        { name: "Gripe Support", description: "Handlebars, SQL, PaperCSS, JavaScript",
        link: "https://infinite-bayou-42393.herokuapp.com/",
        repo: "https://github.com/itsmeadriana/Gripe-Support",
        about: "A place to air out your feelings without judgment. Here, we create a community of psyche caretakers."},
        { name: "Soundtracker", description: "HTML, CSS, APIs, Bulma, jQuery, JavaScript",
        link: "https://itsmeadriana.github.io/Soundtracker/",
        repo: "https://github.com/itsmeadriana/Soundtracker",
        about:"A search engine for movie soundtracks that will generate track listings, video, and lyrics."
        },
        {
          name: "ReadMe Generator",
          description: "JavaScript, Node.js, Inquirer.js",
          link: "https://github.com/itsmeadriana/readme-generator/",
          repo: "https://github.com/itsmeadriana/readme-generator",
          about: "A simple Node.js program that will generate a README.MD file after you've filled out the questionnaire about your app."
        },
        {
          name: "Take Notes",
          description: "JavaScript, HTML, CSS, ES6, Bootstrap, Node.js, Express.js, Jest.js",
          link: "https://github.com/itsmeadriana/take-notes",
          repo: "https://github.com/itsmeadriana/take-notes",
          about: "A note-taking app that allows users to create a note, save it locally, and delete it when it's no longer necessary."
        },
        {
          name: "JavaScript Jeopardy",
          description: "JavaScript, HTML, CSS",
          link: "https://itsmeadriana.github.io/JavaScriptJeopardy/",
          repo: "https://github.com/itsmeadriana/JavaScriptJeopardy",
          about: "A quick JavaScript quiz about JavaScript, built with JavaScript."
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