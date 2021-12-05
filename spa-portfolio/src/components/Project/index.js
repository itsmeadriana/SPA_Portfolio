import React from 'react';
import { capitalizeFirstLetter } from '../../utils';

function Project({currentProject}) {
   const {
       name,
       description,
       link,
       repo,
   } = currentProject;

   function fileNameHandler(projectName) {
    const result = projectName.replace(/ /g, '-');
    return result.toLowerCase();
   }

   const normalizeProjectName = fileNameHandler(name);

    return(
        <section className="flex-column project-cards">
            <h3 className="project-desc">{capitalizeFirstLetter(name)}</h3>
            <p className="project-desc">{description}</p>
            <ul className="project-cards">
                <li><a href={link}>
                <img className="project-img container" src={require(`../../assets/images/webImages/${normalizeProjectName}.png`).default} /></a>
                </li>
                <li className="card-desc"><a href={repo}>{name} Github Repository</a></li>
            </ul>
        </section>
        );
}

export default Project;