import React from 'react';
import { capitalizeFirstLetter } from '../../utils';

function Project({currentProject}) {
   const {
       name,
       description,
       link,
       repo,
       about
   } = currentProject;

   function fileNameHandler(projectName) {
    const result = projectName.replace(/ /g, '-');
    return result.toLowerCase();
   }

   const normalizeProjectName = fileNameHandler(name);

    return(
        <section className="flex-column project-cards card mx-4 my-3">
            <h3 className="project-desc project-title my-3">{capitalizeFirstLetter(name)}</h3>
                <p className="modalTitle">Built with the following:</p>
                <p className="project-desc px-2">{description}</p>
                <ul className="container">
                    <li><a href={link} target="_blank" rel="noreferrer">
                    <img className="project-img container py-2 px-2" src={require(`../../assets/images/webImages/${normalizeProjectName}.png`).default} alt="project-screenshot"/></a>
                    </li>
                    <br />
                    <li className='project-about'>{about}</li>
                    <br />
                    <li><a className="projectLink my-3" target="_blank" rel="noreferrer" href={repo}>{name} Github Repository</a></li>
                </ul>
            <br />
        </section>
        );
}

export default Project;