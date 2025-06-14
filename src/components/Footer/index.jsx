import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { getSystemResources } from "../../lib/sanity/sanityService";

function Footer() {
    let date = new Date();
    let year = date.getFullYear();
    const systemResources = getSystemResources();
    return (
        <Container fluid className="footer">
            <Row>
                <Col md="4" className="footer-copywright">
                    {/* <h3>Developed by @me</h3> */}
                </Col>
                <Col md="4" className="footer-body">
                    <ul className="footer-icons">
                        <li className="social-icons">
                            <a
                                href={systemResources?.github}
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer">
                                <AiFillGithub />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href={systemResources?.twitter}
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer">
                                <AiOutlineTwitter />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href={systemResources?.linkedin}
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer">
                                <FaLinkedinIn />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href={systemResources?.instagram}
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer">
                                <AiFillInstagram />
                            </a>
                        </li>
                    </ul>
                </Col>
                <Col md="4" className="footer-copywright">
                    {/* <h3>Copyright © {year} @me</h3> */}
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;
