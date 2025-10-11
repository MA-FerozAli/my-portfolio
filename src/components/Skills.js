import React from "react";
import { FaReact,FaPython,FaHtml5,FaCss3Alt,FaGitAlt } from "react-icons/fa";


function SKills(){
    const skills=[
      {icon:<FaHtml5 size={40} title="HTML5" color="#e34F26"/> ,name:"HTML5"},
      {icon:<FaCss3Alt size={40} title="CSS" color="#1572B6"/>,name:"CSS3"},
      {icon: <FaReact size={40} title="REACT" color="#61DBFB"/>,name:"React"},
      {icon: <FaPython size={40 } title="PYTHON" color="#3776AB"/>,name:"Python"},
      {icon:<FaGitAlt size={40 } title="GIT" color="#F05032"/>,name:"Git"},
    ];
    return(
        <section id="skills" className="skills">
            <h2>Skills</h2>
            <div className="skill-grid">
                {skills.map((s,i)=>(
                    <div key={i}
                    className="skill-card" >
                        {s.icon}
                        <p>{s.name}</p>
                        </div>
                ))}
                
                
               
               
            </div>
        </section>
    );
}
export default SKills;