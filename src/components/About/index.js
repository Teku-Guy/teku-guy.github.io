import React from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import profille from '../../assets/images/gm.jpg'

function About() {

    return (
        <section className="about">
          <div className="cta pt-5 blur">
            <Container >
              <Row>
                <Col className="md-6 title-i">
                  <h1 className="text-end">Gustavo Muratalla</h1>
                  <h2 className="text-end">Developer // Musician</h2>
                </Col>
                <Col className="md-6">
                  <img src={profille} alt="Profile of Gustavo Muratalla" className="profile-image"/>
                </Col>
              </Row>
            </Container>
          </div>
          <div id="about-section" className="pt-5">
            <Container fluid="xl">
              <Row className="justify-content-center">
                <Col>
                  <article className="mb-5">
                    <h2 className="article-header">About Me . . .</h2>
                    <hr/>
                    <p>
                      Hello! My name is Gustavo Muratalla Jr. I have been coding for a solid 5-6 years. 
                      I embarked on my coding journey when I was an incoming Freshman in Dos Pueblos High School. 
                      I was inspired by a neighborhood friend to pick up coding since I had developed a passion for computers.
                    </p>
                    <p>
                      I decided to expand my knowledge and have attended UCLA Extension Bootcamp to get my certification for Fullstack
                      JavaScript Web Development. Where i was taught the skills required to use the following technologies Laravel, React.js, Handlebars, and Jekyll. 
                      Although I may have my Web Development certifications I also proficient in the following programing languages: Java, Python, C#, and Ruby.
                    </p>
                    <p>
                      Feel Free to check out my projects  
                      on my <a className="link-light" href="https://github.com/teku-guy"  rel="noreferrer" target="_blank">GitHub.</a>
                    </p>
                  </article>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
    );
}

export default About;