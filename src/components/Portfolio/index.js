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
        about: "A place to air out your feelings without judgment. Here, we create a community of psyche caretakers."
        },
        { name: "Soundtracker", description: "HTML, CSS, RapidAPI IMDB API, Happi Music API, Bulma, jQuery, JavaScript",
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
          name: "Enumerating Employees",
          description: "JavaScript, Node.js, Inquirer, MySQL",
          link: "https://drive.google.com/file/d/1t4cVPMSEm3gZyUgvEsuwaQxarN6i4ytq/view",
          repo: "https://github.com/itsmeadriana/Enumerating-Employees",
          about: "A Command Line app that makes it easy to view and interact with stored data, specifically, a company’s employee database."
        },
        {
          name: "E-Commerce Endgame",
          description: "JavaScript, Node.js, Express.js, MySQL, and Sequelize",
          link: "https://drive.google.com/file/d/1G5HbcfoFyQM1wW-UtXOF0digDb4yP44k/view",
          repo: "https://github.com/itsmeadriana/eCommerceDatabase",
          about: "An ORM app that builds the back end of an e-commerce site by taking a working Express.js API and configuring it to use Sequelize to interact with a MySQL database."
        },
        {
          name: "Team Profile Generator",
          description: "JavaScript, Node.js, Inquirer, Jest, HTML, and Bulma",
          link: "https://github.com/itsmeadriana/OOP-team-profile-generator",
          repo: "https://github.com/itsmeadriana/OOP-team-profile-generator",
          about: "A Command Line app that generates a profile for a company's team"
        },
        {
          name: "Portfolio Generator",
          description: "JavaScript, Node.js, Express.js, Inquirer, HTML, and CSS",
          link: "",
          repo: "https://github.com/itsmeadriana/portfolio-generator",
          about: "A Node.js app that will generate a portfolio page with the names of projects, brief descriptions, and links to repositories after a series of prompts."
        },
        {
          name: "WeatherDash",
          description: "HTML, CSS, JavaScript, Day.js, and OpenWeather.org APIs",
          link: "https://itsmeadriana.github.io/WeatherDash",
          repo: "https://github.com/itsmeadriana/WeatherDash",
          about: "This site shows the current temperature, humidity, wind speed, and UV Index level any city and a five-day forecast."
        },
        {
          name: "Password Generator",
          description: "HTML, CSS, and JavaScript",
          link: "https://itsmeadriana.github.io/Password-Generator",
          repo: "https://github.com/itsmeadriana/Password-Generator",
          about: "Generates a randomized password between 8 and 128 characters long that meets at least one of four criteria: numbers, uppercase and lowercase letters, and special characters."
        },
        {
          name: "Take Notes",
          description: "JavaScript, HTML, CSS, ES6, Bootstrap, Node.js, Express.js, Jest.js, and UUIDv4",
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