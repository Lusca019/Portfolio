import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              APRENSENTAÇÃO <span className="purple"> PESSOAL </span></h1>
            <p className="home-about-body">
              Técnico formado em mecatrônica e
              com um grande interesse por
              desenvolvimento de software.
              <br />
              <br />
              <i>
                <b className="purple"> Busco uma vaga onde possa
                  colocar minhas habilidades em
                  prática e colaborar com equipes de
                  trabalho, visando o crescimento da
                  organização e o desenvolvimento
                  pessoal e profissional. </b>
              </i>
              <br />
              <br />
              As minhas áreas de interesse são a construção de novas  &nbsp;
              <i>
                <b className="purple">Tecnologias e Produtos Web </b> e
                também em áreas relacionadas com{" "}
                <b className="purple">
                  automação de processos.
                </b>
              </i>
              <br />
              <br />
              Sempre que possível, também aplico minha paixão por desenvolver produtos com <b className="purple">Node.js</b> e
              <i>
                <b className="purple">
                  {" "}
                  Bibliotecas e frameworks modernos de Javascript
                </b>
              </i>
              &nbsp; como
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ME ENCONTRE EM</h1>
            <p>
              Sinta-se livre para <span className="purple">me seguir </span>em
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Lusca019"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/usgamusga"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/lucas-de-lima-js/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/delimalusca/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
