import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../../components/Card/ProjectCards";
import { getSystemResources } from "../../lib/sanity/sanityService";

function Projects() {
    const systemResources = getSystemResources();
    return (
        <Container fluid className="project-section">
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Works </strong>
                </h1>
                <p style={{ color: "white", marginBottom: "40px" }}>
                    {systemResources.project_description}
                </p>
                <Row style={{ paddingBottom: "10px" }}>
                    {systemResources.projects &&
                    systemResources.projects.length > 0 ? (
                        systemResources.projects.map((res, index) => (
                            <Col md={6} className="project-card" key={index}>
                                <ProjectCard
                                    imgPath={res.thumbnail}
                                    title={res.title}
                                    description={res.description}
                                    isGh={res.github ? true : false}
                                    ghLink={res?.github}
                                    isDemo={res.live ? true : false}
                                    demoLink={res?.live}
                                    others={res}
                                />
                            </Col>
                        ))
                    ) : (
                        <></>
                    )}
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
