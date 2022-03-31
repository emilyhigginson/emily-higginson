import React, {useEffect, useState} from 'react'
import './Project.css'
import ProjectCard from './ProjectCard'


function Projects() {
 const [projectArray, setProjectArray] = useState([])

  useEffect(() => {
    fetch('/projects')
    .then(res => res.json())
    .then(setProjectArray)
  },[] )

  return (
    <div id="projects">
        <h1>Projects</h1>
        <p>Here are my projects</p>
        <p id="cardContainer">
    {projectArray.map((project) => (    
    <ProjectCard
        key={project.id}
        name={project.name}
        description={project.description}
        image={project.image}
        github={project.github}
        demo={project.demo} 
        />
    )) }    
    </p>
    </div>
  )
}

export default Projects