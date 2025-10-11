import React from "react";
import {motion} from "framer-motion";
function Hero(){
    return(
        <section id="hero" className="hero">
            <motion.h1 initial={{opacity :1,y:-50}}
            transition={{duration :0.8}}
            animation={{opacity:1,y:0}}
            >Hi,I'm<span> M A Feroz Ali</span></motion.h1>
            <motion.p
            initial={{opacity :1,y:30}}
            transition={{delay:0.4,duration :0.8}}
            animation={{opacity:1,y:0}}>Aspiring Web Developer | 
                React & Python Enthusiast</motion.p>
            <a href="#contact" className="btn">Contact Me</a>
        </section>
    );
}
export default Hero;