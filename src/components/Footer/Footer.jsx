import React from "react";
import twitter from "../../images/twitter.png";
import instagram from "../../images/instagram logo.png";
import github from "../../images/github.png";
import linkedin from "../../images/linkedin.png";
import "./styles.css";
import {Container,Row, Col} from 'react-bootstrap';

const Footer = () => { return( <div className="footer">

<Container>
<Row>
    <Col className="link" align="center"><a href="https://www.instagram.com/lindsay.tech/">
    <img src={instagram} alt="INSTAGRAM"></img>
    <p>Instagram</p></a>
    </Col>

    <Col className="link" align="center">
      <a href= "https://www.linkedin.com/in/lindsayezeagu/">
    <img src={linkedin} alt="LINKEDIN"></img>
<p>Linkedin</p></a>
  
  </Col>

  <Col className="link" align="center"> <a href ="https://twitter.com/LindsayEzeagu" >
  <img src={twitter} alt="TWITTER"></img>
  <p>Twitter</p></a>
  </Col>

  <Col className="link" align="center"><a href ="https://github.com/LindsayEzeagu/">
    <img src={github} alt="GITHUB"></img>
  <p>Github</p></a>
  </Col>
  </Row>
</Container>
</div>); };

export default Footer;