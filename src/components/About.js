import React from "react";
import profileImg from '../assets/profile.jpg';

function About(){
    return(
        <section id="about" className="about">
            <h2>About Me</h2>
            <img src={profileImg} alt="My Profile" className="profile-image" />
            <div>
                
                <p>
                    I'm a passionate developer 
                    Interseted to creating user friendly web applications using
                    React   &  Python 

                </p>
            </div>
      
        </section>
    );
}
export default About;