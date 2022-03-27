import React from "react";
import profile from "../images/profile.png";
import slide from "../images/futureleader.png";
import {Container,Row, Col} from 'react-bootstrap';
import "./home.css";

const Home = () => { return( <Container fluid>
  <Row className="row-padding">
    <Col md={7}>
  <h1>Lindsay <br></br>
    Ezeagu</h1>
    <p className="bio">Software Engineering student,who is passionate about technology, people & poetry. Sharing and documenting my journey into a career into tech to empower , educate & encourage others. </p>
    </Col>
    <Col>
  <img
          alt="Profile pic"
          src={profile}
          //className="d-inline-block align-top"
          id="profile"
        />
    </Col>
  </Row>
  <Row>
    <Col>
  <img 
      alt="Future Leaders Cover"
      src={slide}
      className=""
      id="cover"
      />
    </Col>

    <Col className="ach-des align-items-center">
      <Row className="achv">
  <div className="achvm">
  <h2>Top 150 Future Leaders</h2>
  <p className="achievement1">Listed as one of the Top 150 most outstanding African and African Caribbean students 2021/2022.</p>
  <button>Read Page 21</button>
  </div>
  </Row>
  </Col>
  </Row>
</Container>); 

};

export default Home;