import React from "react";
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";
import project3 from "../images/111.jpg";
import project4 from "../images/222.jpg";
import project5 from "../images/333.jpg";
import project6 from "../images/444.jpg";
import project7 from "../images/555.jpg";
import project8 from "../images/666.jpg";

const Projects = () => {
  const projectList = [
    {
      id: 1,
      name: "Application software",
      imageUrl: project3,
    },
    {
      id: 2,
      name: "System software",
      imageUrl: project4,
    },
    {
      id: 3,
      name: "Driver software",
      imageUrl: project5,
    },
    {
      id: 4,
      name: "Middleware",
      imageUrl: project6,
    },
    {
      id: 5,
      name: "Programming software",
      imageUrl: project7,
    },
    {
      id: 6,
      name: "Technical Analysis ",
      imageUrl: project8,
    },
  ];

  return (
    <motion.div
      animate={{
        scale: [2, 1],
        rotate: [90, 0],
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="projects"
    >
      <h2>Projects</h2>
      <div className="wrapper">
        {projectList.map((item) => {
          return (
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
              key={item.id}
            >
              <Card>
                <Card.Img variant="top" src={item.imageUrl} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                </Card.Body>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Projects;

