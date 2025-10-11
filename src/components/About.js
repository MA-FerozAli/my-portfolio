import React from "react";
import { motion } from "framer-motion";
function About(){
    return(
        <section id="about" className="about">
            <motion.img src="public\profile.jpg" alt="profile" 
            initial={{opacity :0,scale:0.8}}
            transition={{duration :0.6}}
            whileInView={{opacity :1,scale:1}}
           />
            <motion.div
             initial={{opacity :0,y:40}}
            transition={{duration :0.6}}
            whileInView={{opacity :1,y:0}}
            >
                <h2>About Me</h2>
                <p>
                    I'm a passionate developer 
                    Interseted to creating user friendly web applications using
                    React   &  Python 

                </p>
            </motion.div>
        </section>
    );
}
export default About;