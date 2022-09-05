import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";


const About = () => {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
   
  return (

 
    <>
 



      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="progress-bar-animate"
      />
      <div className="about">
        <h2>About</h2>
        <>
          <article>
            <p>
              Safety-Critical Applications: We set the standard for performance.
            </p>
            <p>
              Performance is a software and engineering services firm that provides innovative, turnkey solutions for safety-critical projects. We serve clients in the avionics, aerospace/defense, healthcare, and energy markets whose missions require meticulous attention to detail.
Our highly collaborative approach to outsourced development is disrupting the embedded software industry. We emphasize partnership and reliable, high-quality results.

We’re agile problem solvers who possess exceptional technical skills and domain expertise. We build service-focused teams that have the tools and talent necessary to respond quickly and effectively to client needs and ever-changing conditions. We work intelligently and quickly to deliver high-performance solutions to our clients.

Performance also offers several pre-developed software solutions created for specific commercial applications. Available with complete customization options, these applications provide sophisticated technology in a cost-effective, plug-and-play format.
            </p>
           
          </article>
        </>
      </div>
    </>
  );
};

export default About;
