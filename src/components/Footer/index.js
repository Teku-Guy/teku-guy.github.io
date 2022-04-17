import React from "react";
import { Container, Anchor } from "react-bootstrap";
import { FaGithub, FaLinkedinIn, FaTwitter, FaStackOverflow } from "react-icons/fa";

function Footer() {
    const links = {
        twitter: "https://twitter.com/teku_guy",
        linkedIn: "https://www.linkedin.com/in/gustavo-muratalla/",
        github: "https://github.com/teku-guy",
        stack: "https://stackoverflow.com/users/5813202/gustavo-muratalla"
    }

    //return JSX
    return (
        <footer className="bg-blue text-center text-white clear-top">
            <Container fluid className="p-4 pb-0">
                <section className="icons mb-4">
                    <Anchor className="btn btn-outline-light btn-floating m-1" href={links.twitter} target="_blank" role="button" >
                        <FaTwitter />
                    </Anchor>
                    <Anchor className="btn btn-outline-light btn-floating m-1" href={links.linkedIn} target="_blank"  role="button">
                        <FaLinkedinIn />
                    </Anchor>
                    <Anchor className="btn btn-outline-light btn-floating m-1" href={links.github} target="_blank"  role="button">
                        <FaGithub />
                    </Anchor>
                    <Anchor className="btn btn-outline-light btn-floating m-1" href={links.stack} target="_blank"  role="button">
                        <FaStackOverflow />
                    </Anchor>
                    
                </section>
            </Container>
            <div className="cp p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
                <Anchor href="mailto:gusmuratalla@gmail.com" target="_blank" style={{textDecoration: 'none', color: "white", fontSize: "17px"}}>  gusmuratalla@gmail.com </Anchor>
                <br />
                © 2021 Copyright: <Anchor href={links.github} target="_blank"> Gustavo Muratalla </Anchor>
            </div>
        </footer>
    )
}

export default Footer;