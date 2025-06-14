import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { getSystemResources } from "../../lib/sanity/sanityService";

function ProjectCards(props) {
    const systemResources = getSystemResources();
    return (
        <Card className="project-card-view">
            <Card.Body>
                <Button
                    variant="primary"
                    href={systemResources?.resume}
                    target="_blank">
                    <AiOutlineDownload /> &nbsp; Download
                </Button>
            </Card.Body>
            <Card.Img
                variant="top"
                src={props.imgPath}
                alt="card-img"
                style={{ borderRadius: "50%" }}
            />
            <Card.Body>
                <Button
                    variant="primary"
                    href={systemResources?.resume}
                    target="_blank">
                    <AiOutlineDownload /> &nbsp; Download
                </Button>
            </Card.Body>
        </Card>
    );
}
export default ProjectCards;
