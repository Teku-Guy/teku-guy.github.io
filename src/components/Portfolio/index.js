import React from "react";
import { Container } from "react-bootstrap";
import ProjectCards from '../Project'
import portfolio from '../../portfolio-list.json';

function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

function Portfolio() {

  return (
    <section className="portfolio pt-5">
      <Container fluid>
        <h1 className="title">Portfolio</h1>
        <hr />
        
      </Container>
        <Wrapper id="card-data">
        {portfolio.map((project) => (
           <ProjectCards 
            key={project.id} 
            image={project.image} 
            name={project.name} 
            github={project.github} 
            deploy={project.deploy} 
            lm={project.lm} 
           />
        ))}
        </Wrapper>
    </section>
  );
}

export default Portfolio;