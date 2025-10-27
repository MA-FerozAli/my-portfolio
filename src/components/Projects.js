
import React from "react";
import {Link as LinkIcon}from 'lucide-react'
const projectData =[
    {
        title:"Complaint Management",
        description:"Flask + Excel-based web app to handle complaints efficiently",
        tech :"Python,Excel,HTML/CSS" ,
    },
    {
        title:"Decentralized Electricity Credit and Trading ",
        description:"Peer-to-Peer Energy Exchange with Dynamic Pricing",
        tech :"Django,MYSQL,React,Blockchain,Rest" ,
    }
]
function Project(){
    return(
        <section id="projects" className="projects">
            <h2>Projects</h2>
             <div className="project-list">
                <button><LinkIcon size={20}/></button>
                 {projectData.map((proj,index)=>(
                    <div key={index}
                    className="project-card"> 
                        <h3>{proj.title}</h3>
                        <p>{proj.description}</p>
                        <p><strong>Tech:</strong>{proj.tech}</p>
                      </div> 
                ))}
           </div> 
          
        </section>
    );
}
export default Project;