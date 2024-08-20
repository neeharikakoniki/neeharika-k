import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  const handleButtonClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Skilled Software Developer
          <br /> Driving Innovation and Agile Excellence
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/group.jpg" alt="" />
          <h1>
            <motion.span whileHover={{ color: "orange", scale: 1.1 }}>
              Recent <motion.b whileHover={{ color: "orange" }}>Project</motion.b>
            </motion.span>
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Portfolio </motion.b>Showcases
          </h1>
          <button>2022 - 2024</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
          onClick={() => handleButtonClick("https://github.com/neeharikakoniki/BattleShipGame-MobileDevelopment")}
        >
          <h2>Battleship GameApp</h2>
          <p>
            Developed a comprehensive Flutter app with RESTful API for authentication and real-time gameplay, featuring a dynamic 5x5 game board and cross-platform support. Ensured modular code, smooth gameplay, and robust testing for macOS, Android, and iOS.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
          onClick={() => handleButtonClick("https://github.com/neeharikakoniki/Point-Cloud-ML-Project")}
        >
          <h2>Classification and Semantic Segmentation of Point Clouds</h2>
          <p>
            Developed machine learning models for point cloud classification and semantic segmentation in VR and 3D mapping applications. Achieved 78% accuracy using PointNet and optimized deep learning techniques.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
          onClick={() => handleButtonClick("https://github.com/neeharikakoniki")}
        >
          <h2>Global Temperature and Weather Data Analysis with Snowflake</h2>
          <p>
            Improved data processing time by 40% and forecast accuracy by 15% through advanced ML algorithms and a new data pipeline. Designed a Power BI dashboard for real-time insights and enhanced decision-making.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
          onClick={() => handleButtonClick("https://github.com/neeharikakoniki/")}
        >
          <h2>Fraudulent Transaction Prediction</h2>
          <p>
            Developed ML algorithms to detect over 1000 suspicious transactions, achieving 90% accuracy and significantly reducing false positives.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
