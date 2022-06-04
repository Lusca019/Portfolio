import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
           Olá a todos, meu nome é <span className="purple">Lucas de Lima </span>
            de <span className="purple"> Belford Roxo, Rio de Janeiro.</span>
            <br />Sou desenvolvedor junior cursando Sistemas da Informação e técnico formado em mecatrônica.
            <br />
            <br />
            Além de codar, algumas outras atividades que adoro fazer!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jogar jogos online
            </li>
            <li className="about-activity">
              <ImPointRight /> Sair com meus amigos
            </li>
            <li className="about-activity">
              <ImPointRight /> Viajar esse Brasil lindo
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Conhece-te a ti mesmo e conhecerá o universo e os deuses."{" "}
          </p>
          <footer className="blockquote-footer">Sócrates</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
