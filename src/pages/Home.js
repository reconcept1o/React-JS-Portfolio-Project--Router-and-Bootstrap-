import React from "react";
import { motion } from "framer-motion";



const Home = () => {
  return (
    <div className="home">

  

      <motion.div
        className="name"
        initial={{
          x: -200,
          scale: .5,
        }}
        animate={{
          x: 0,
          scale: 1,
        }}
        transition={{ duration: 1 }}
      >
        Reconcept<font color="yellow">X</font>
      </motion.div>
      <motion.div
        class="desc"
        initial={{
          x: 300,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          scale: 1,
        }}
        transition={{ duration: 1 }}
      >
        <font>Roadmap is key when learning something new.</font> Find what convenient your targets in <font> incessant our booming catalog of coding languages</font> ,courses and in demand tech ability
      </motion.div>
    </div>
  );
};

export default Home;