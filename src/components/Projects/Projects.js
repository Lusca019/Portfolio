import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ecommerce from "../../Assets/Projects/ecommerce.png";
import techstore from "../../Assets/Projects/techstore.png";
import corretor from "../../Assets/Projects/corretor.jpeg";
import pizzaria from "../../Assets/Projects/pizzaria.jpeg";
import biometria from "../../Assets/Projects/biometria.png";
import clinica from "../../Assets/Projects/clinica.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meus <strong className="purple">trabalhos </strong> recentes
        </h1>
        <p style={{ color: "white" }}>
          Aqui estão alguns projetos em que trabalhei recentemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={techstore}
              isBlog={false}
              title="TechStore"
              description="Modelo de painel de administração baseado em Next.js com pacote de componentes @paljs/ui que usei como base para treinar com nextjs"
              link="https://ecommerce-ivory-theta-26.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pizzaria}
              isBlog={false}
              title="Chatbot de pizzaria"
              description="Desenvolvi uma chatbot com inteligência artificial capaz de anotar pedidos e redirecionar eles para um banco de dados. O Chatbot possui cardapio e formas de pagamentos inclusos. Como o projeto foi desenvolvido para uma empresa a qual prestei serviço não poderei liberar o código."
              link="https://github.com/Lusca019"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clinica}
              isBlog={false}
              title="Chatbot de clínica"
              description="Desenvolvi uma chatbot com inteligência artificial capaz de realizar atendimentos via whatsapp com o intuito de agilizar agendamentos de consultas hospitalares. Como o projeto foi desenvolvido para uma empresa a qual prestei serviço não poderei liberar o código."
              link="https://github.com/Lusca019"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={corretor}
              isBlog={false}
              title="Chatbot Corretor"
              description="Desenvolvi uma chatbot com inteligência artificial capaz de realizar atendimentos via whatsapp com o intuito de ajudar meu pai com vendas de apartamento já que ele é corretor de imóveis, o chatbot utiliza um banco de dados com todas as informações dos empreendimentos para fornecer informações sobre eles."
              link="https://github.com/Lusca019"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="Ecommerce"
              description="Tenho um ecommerce como template para apresentações para alguns clientes que desejam algo desse tipo"
              link="http://lojaexemplolucasecommerce.com.br"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={biometria}
              isBlog={false}
              title="Listagem por biometria"
              description="Um projetinho que estava desenvolvendo para melhorar a lista de presença dos treinamentos na empresa que trabalhei, substituindo os papéis por um método utilizando a biometria do colaborador visando a eficiência e sustentabilidade, onde os colaboradores na atividade terão sua presença armazenada em um banco de dados. A partir disso será possível gerar um relatório de presença em formato csv ou pdf evitando o uso excessivo de papéis."
              link="https://www.linkedin.com/posts/lucas-de-lima-js_desenvolver-automaaexaeto-tecnologia-activity-6892562823327682560-wVHV?utm_source=linkedin_share&utm_medium=member_desktop_web"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
