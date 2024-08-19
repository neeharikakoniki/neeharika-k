import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Software Engineer , Wiley Mthree",
    img: "./ms.jpg",
    desc: (
      <ul>
        <li>Spearheaded full lifecycle software development projects for financial risk management at Morgan Stanley</li>
        <li>Implemented adoption of enterprise SDLC solutions for 2+ applications and 100+ users, ensuring organizational efficiency</li>
        <li>Built robust compliance algorithms using C++ and Python, ensuring adherence to financial regulatory standards; reduced non
        compliance incidents by 3% within first quarter</li>
        
      </ul>
      
    )
    },
  {
    id: 2,
    title: "C++ Developer Intern, Wiley Mthree",
    img: "./in1.png",
    desc: "Optimized Python code to reduce runtime by 10%, which improved overall application performance,resolved over 50 minor bugs.Led a code renovation project, converting from Python to C++, which enhanced adaptability and maintainability.",
  },
  {
    id: 3,
    title: "Mentorship, Smart Interview Startup",
    img: "./in2.png",
    desc: "Enhanced employability of 150-200 engineering graduates by 16% through targeted mentorship in Data Structures and Algorithms, including office hours, doubt resolution, and assignment evaluations.",
  },
  {
    id: 4,
    title: "Data Visualization Virtual Internship, GlobalShala",
    img: "./in4.png",
    desc: "Completed a 4-week virtual internship focused on creating insightful data visualizations using advanced tools, enhancing data interpretation and decision-making skills. Developed dashboards and reports to effectively communicate complex data trends and findings.",
  },
  {
    id: 5,
    title: "Coding Tutor, WhiteHatJr",
    img: "./in5.png",
    desc: "Mentored over 400 students globally through CourseHero, Chegg, and WhiteHatJr, providing academic support and improving grades by 35%. Covered topics included game design and development fundamentals, enhancing students' understanding of both theoretical and practical aspects of game creation..",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Experience</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
