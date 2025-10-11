
import React from "react";
 import {motion  } from "framer-motion";

const projectData =[
    {
        title:"Complaint Management",
        description:"Flask + Excel-based web app to handle complaints efficiently",
        tech :"Python,Excel,HTML/CSS" ,
    }
]
function Project(){
    return(
        <section id="projects" className="projects">
            <h2>Projects</h2>
             <motion.div className="project-list">
                 {projectData.map((proj,index)=>(
                    <div key={index}
                    className="project-card" whileHover={{scale:1.05}} 
                    transition={{duration:0.3}}> 
                        <h3>{proj.title}</h3>
                        <p>{proj.description}</p>
                        <p><strong>Tech:</strong>{proj.tech}</p>
                      </div> 
                ))}
           </motion.div> 
          
        </section>
    );
}
export default Project;