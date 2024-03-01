import React from 'react'
import './project.css'

const Projects = () => {
  return (
    <section className="project sections" id="projects">
        <h2 className="section-title">Projects</h2>
        <span className="section-subtitle">
            Projects Done 
        </span>

        <div className="project__container container grid">
            <div className="project__content">
            <div>
                <h3 className="project-title">Personal Portfolio</h3>
                <p className="project-desc">A personal portfolio website built using HTML, CSS, Javascript, React.Js.</p>
             </div>
             

             <a href="https://github.com/DanielR6303/Portfolio" className="button cv-btn  button--flex">GitHUB
                <i class="uil uil-github-alt git"></i>
                </a>

           
            </div>

            <div className="project__content">
            <div>
                <h3 className="project-title">To-Do-List</h3>
                <p className="project-desc">
                    A simple to do list application built with React.js.
                </p>
             </div>

             <a href="https://github.com/DanielR6303/To-Do-list" className="button cv-btn  button--flex">GitHUB
                <i class="uil uil-github-alt git"></i>
                </a>

            
            </div>

            <div className="project__content">
            <div>
                {/* <i className="uil uil-folder-open nav-icon"></i> */}
                <h3 className="project-title">Weather App</h3>
                <p className="project-desc">A simple weather app built using React.js and Open Weather API.</p>
             </div>

             <a href="" className="button cv-btn  button--flex">GitHUB
                <i class="uil uil-github-alt git"></i>
                </a>

            </div>
        </div>
    </section>
  )
}

export default Projects