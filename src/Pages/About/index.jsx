import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import GitHubCalendarComponent from "../../components/Github/GitHubCalendar";
import Aboutcard from "./AboutCard";
import Techstack from "../../components/Stack/Techstack";
import Toolstack from "../../components/Stack/Toolstack";
import { getSystemResources } from "../../lib/sanity/sanityService";

function About() {
    const systemResources = getSystemResources();
    return (
        <Container fluid className="about-section">
            <Container>
                <Row style={{ justifyContent: "left" }}>
                    <Col
                        md={6}
                        style={{ paddingBottom: "50px", marginTop: "30px" }}
                        className="about-img">
                        <img
                            src={systemResources.image_about}
                            alt="about"
                            className="img-fluid"
                        />
                    </Col>
                    <Col
                        md={6}
                        style={{
                            justifyContent: "center",
                            paddingTop: "30px",
                            paddingBottom: "50px",
                        }}>
                        <h1
                            style={{
                                fontSize: "2.1em",
                                paddingBottom: "20px",
                            }}>
                            My <strong className="purple">Profile</strong>
                        </h1>
                        <Aboutcard />
                    </Col>
                </Row>

                <h1 className="project-heading">
                    My <strong className="purple">Skillset </strong>
                </h1>

                <Techstack />

                <h1 className="project-heading">
                    My <strong className="purple">Tools</strong>
                </h1>
                <Toolstack />
                <h1
                    className="project-heading"
                    style={{ paddingBottom: "20px" }}>
                    Days I <strong className="purple">Code</strong>
                </h1>

                <GitHubCalendarComponent />
            </Container>
        </Container>
    );
}

export default About;
