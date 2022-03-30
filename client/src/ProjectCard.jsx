import React from 'react'
import './Project.css'

function ProjectCard({name, description, image, github, demo}) {
  return (
    <div id="card">
        <h1> {name} </h1>
        <h3> {description} </h3>
        <p> {github} / {demo} </p>
    </div>
  )
}

export default ProjectCard