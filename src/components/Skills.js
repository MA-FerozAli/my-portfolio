import React from "react";
import { FaReact,FaPython,FaHtml5,FaCss3Alt,FaGitAlt } from "react-icons/fa";


function SKills(){
    return(
        <section id="skills" className="skills">
            <h2>Skills</h2>
            <div className="icons">
                <FaHtml5 size={40} title="HTML5" />
                <FaCss3Alt size={40} title="CSS" />
                <FaReact size={40} title="REACT" />
                <FaPython size={40 } title="PYTHON"/>
                <FaGitAlt size={40 } title="GIT"/>
            </div>
        </section>
    );
}
export default SKills;