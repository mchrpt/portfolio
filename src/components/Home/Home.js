import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Type from "./Type";
import About from "../About/About";
import Projects from "../Projects/Projects";
import VideoSlideshow from "../VideoSlideshow";


import ImperiusNuke from "../../Assets/Projects/Imperius/ImperiusNuke.mp4";
import ImperiusShield from "../../Assets/Projects/Imperius/ImperiusShield.mp4";
import ImperiusPathfinding from "../../Assets/Projects/Imperius/ImperiusPathfinding.mp4";
import ImperiusCombat from "../../Assets/Projects/Imperius/ImperiusCombat.mp4";
import ImperiusFTL from "../../Assets/Projects/Imperius/ImperiusFTL.mp4";
import ImperiusInvis from "../../Assets/Projects/Imperius/ImperiusInvis.mp4";
import ImperiusEMP from "../../Assets/Projects/Imperius/ImperiusEMP.mp4";
import ImperiusArty from "../../Assets/Projects/Imperius/ImperiusArty.mp4";
import ImperiusClustering from "../../Assets/Projects/Imperius/ImperiusClustering.mp4";

const videos = [
  ImperiusNuke,
  ImperiusShield,
  ImperiusPathfinding,
  ImperiusCombat,
  ImperiusFTL,
  ImperiusInvis,
  ImperiusEMP,
  ImperiusArty,
  ImperiusClustering
];

function Home() {
  return (
      <section>
        <Container fluid className="home-section" id="home">
          <Particle />
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hello There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
                </h1>

                <h1 className="heading-name">
                  I'M
                  <strong className="main-name"> MATTHEW HENDRICKSON</strong>
                </h1>

                <div style={{ padding: 50, textAlign: "left" }}>
                  <Type />
                </div>
              </Col>

              <Col md={5} style={{ paddingBottom: 20 }}>
                <div className={"video-container"}  >
                  <VideoSlideshow videos={videos} />
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
        <About />
        <Projects/>
      </section>
  );
}

export default Home;