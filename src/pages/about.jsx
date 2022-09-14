import React from "react";
import {Container,Row, Col} from 'react-bootstrap';
import "./about.css";

const About = () => { return( <Container fluid>
  <Row className="row-padding">
    <Col>
    <h1>About Me</h1>

  <Row>
    <Col md={6}>
    <p className="Abm">
    I believe that Technology is creating our future. Technology has been used to shape the world for the better. Growing up, like everyone else, I have witnessed how technology combined with for example health care, banking, education ect; has changed many people’s lives and improved various conditions throughout the world.
    </p>
    </Col>
    </Row>
    </Col>
    </Row>
  
</Container>); };

export default About;