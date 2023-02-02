import { Col, Row } from 'react-bootstrap';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/sharp.png";
import eclipse from "../assets/img/eclipse.svg";
import intellij from "../assets/img/intellij.svg";
import netbeans from "../assets/img/netbeans.svg";
import postman from "../assets/img/postman.svg";
import axure from "../assets/img/axure.svg";
import { motion } from "framer-motion"

import './css/Skills.css';

export const Skills = () => {
  const icons = {
    fontSize: "60px",
    padding: "5px"
  };

  const coloumn = {
    padding: "10px"
  };

  const imgicon = {
    width: "65px",
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Languages, Framework & Database</p>
              <Row className='text-center'>
                <Col style={coloumn}>
                  <motion.div
                    className='pointer'
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <i className="devicon-angularjs-plain size-small" style={icons}></i> <br />
                    Angular
                  </motion.div>

                </Col>
                <Col style={coloumn}>
                  <motion.div
                    className='pointer'
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <i className="devicon-bootstrap-plain" style={icons}></i> <br />
                    Bootstrap
                  </motion.div>
                </Col>
                <Col style={coloumn}>
                  <motion.div
                    className='pointer'
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <i className="devicon-css3-plain" style={icons}></i> <br />
                    CSS
                  </motion.div>
                </Col>
                <Col style={coloumn}>
                  <motion.div
                    className='pointer'
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <i className="devicon-git-plain" style={icons}></i> <br />
                    Git
                  </motion.div>
                </Col>
                <Col style={coloumn}>
                  <motion.div
                    className='pointer'
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <i className="devicon-html5-plain" style={icons}></i> <br />
                    HTML
                  </motion.div>
                </Col>
                <Col style={coloumn}>
                  <motion.div
                    className='pointer'
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <i className="devicon-java-plain" style={icons}></i> <br />
                    Java
                  </motion.div>
                </Col>
                <Col style={coloumn}>
                  <motion.div
                    className='pointer'
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <i className="devicon-javascript-plain" style={icons}></i> <br />
                    JavaScript
                  </motion.div>
                </Col>
                <Col style={coloumn}>
                  <motion.div
                    className='pointer'
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <i className="devicon-mysql-plain" style={icons}></i>
                    <br />
                    MySQL
                  </motion.div>
                </Col>
                <Col style={coloumn}>
                  <motion.div
                    className='pointer'
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <i className="devicon-react-original" style={icons}></i> <br />
                    React JS
                  </motion.div>
                </Col>
                <Col style={coloumn}>
                  <motion.div
                    className='pointer'
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <i className="devicon-spring-plain" style={icons}></i> <br />
                    Spring
                  </motion.div>
                </Col>
              </Row>
              <p style={{ marginTop: "3rem" }} >Application Software</p>
              <Row>
                <Col style={coloumn}>
                  <motion.div
                    className='pointer'
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <i class="devicon-androidstudio-plain" style={icons}></i> <br />
                    Android Studio
                  </motion.div>
                </Col>
                <Col style={coloumn}>
                  <motion.div
                    className='pointer'
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <img src={axure} alt="Logo" style={imgicon} /> <br />
                    Axure RP
                  </motion.div>
                </Col>
                <Col style={coloumn}>
                  <motion.div
                    className='pointer'
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <i class="devicon-figma-plain" style={icons}></i> <br />
                    Figma
                  </motion.div>
                </Col>
                <Col style={coloumn}>
                  <motion.div
                    className='pointer'
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <img src={eclipse} alt="Logo" style={imgicon} /><br />
                    Eclipse IDE
                  </motion.div>
                </Col>
                <Col style={coloumn}>
                  <motion.div
                    className='pointer'
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <img src={intellij} alt="Logo" style={imgicon} /> <br />
                    IntellIj IDEA
                  </motion.div>
                </Col>
                <Col style={coloumn}>
                  <motion.div
                    className='pointer'
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <img src={netbeans} alt="Logo" style={imgicon} /> <br />
                    Netbeans
                  </motion.div>
                </Col>
                <Col style={coloumn}>
                  <motion.div
                    className='pointer'
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <img src={postman} alt="Logo" style={imgicon} /> <br />
                    Postman
                  </motion.div>
                </Col>
                <Col style={coloumn}>
                  <motion.div
                    className='pointer'
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <i class="devicon-vscode-plain" style={icons}></i><br />
                    Visual Studio Code
                  </motion.div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
      <img src={colorSharp} alt="" className="background-image" />
    </section >
  )
}
