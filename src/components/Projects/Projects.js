import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import avod from "../../Assets/Projects/avod.png";
import techstore from "../../Assets/Projects/techstore.png";
import corretor from "../../Assets/Projects/corretor.jpeg";
import pizzaria from "../../Assets/Projects/pizzaria.jpeg";
import sitemoda from "../../Assets/Projects/sitemoda.png";
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
              imgPath={avod}
              isBlog={false}
              title="AVOD"
              description="AVOD - Portal de Soluções Tecnológicas: Fui responsável pelo desenvolvimento do website institucional da AVOD, um parceiro estratégico em tecnologia. O objetivo principal foi criar uma presença digital sólida que comunicasse de forma eficaz sua expertise em APIs, integrações e soluções de pagamento. O site foi construído com Vite e focado em uma experiência de usuário intuitiva."
              link="https://avod-six.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sitemoda}
              isBlog={false}
              title="Fashion History"
              description="Fashion History: A Visual Guide: Um site educacional que desenvolvi como material de apoio para uma apresentação sobre a história da moda. O projeto foi pensado para ser uma ferramenta de aprendizado, com foco em um design limpo, navegação intuitiva e conteúdo em inglês, estruturando informações de diferentes décadas de maneira clara e visualmente atraente."
              link="https://sitemoda.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={techstore}
              isBlog={false}
              title="TechStore"
              description="TechStore: Aplicação full-stack de uma loja virtual de eletrônicos. O projeto simula a experiência completa de um e-commerce, permitindo que os usuários naveguem por produtos, gerenciem um carrinho de compras e realizem o checkout. Foi desenvolvido utilizando Node.js como backand e Vite como frontend."
              link="https://ecommerce-ivory-theta-26.vercel.app/"
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


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
