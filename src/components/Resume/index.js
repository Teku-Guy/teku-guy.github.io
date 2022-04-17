import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import resumePdf from "../../assets/resume.pdf";

function Resume() {

    return (
        <section className="resume pt-5">
            <Container className="pb-5">
                <h1 className="title">Resume</h1>
                <hr />
                <Row>
                    <Col md="12">
                        <div class="justify-content-center mt-5">
                            <div id="front-back">
                                <h2>Front End Experience</h2>
                                <p>HTML, CSS (Bootstrap, Foundation, Materialize), JavaScript, jQuery, React.js</p>
                            </div>
                    
                            <div id="front-back" class="mt-5">
                                <h2>Back End Experience</h2>
                                <p>
                                    Node.js, Express.js, mySQL, Sequelize, NoSQL (MongoDB, Mongoose), Python, API's (third-party, RESTful, server-side), Templating (Handlebars)
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col> 
                        <div class="justify-content-center mt-5">
                            <p className="text-center">Donload my full <a href={resumePdf} style={{ color: '#003049' }} className="link text-decoration-none" download target="blank"> resume</a></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Resume;