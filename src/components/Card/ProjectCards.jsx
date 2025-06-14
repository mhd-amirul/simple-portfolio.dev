import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ShowProject from "../Modal/BsModal";

function ProjectCards(props) {
    return (
        <>
            <Card className="project-card-view highlight-text project-card-container">
                <Card.Img
                    variant="top"
                    src={props.imgPath}
                    alt="card-img"
                    style={{ borderRadius: "50%" }}
                    className="image-overlay"
                />
                <div className="overlay">
                    <div className="button-container">
                        <button
                            onClick={(e) => {
                                window.open(props.demoLink, "_blank");
                            }}>
                            Visit Page
                        </button>
                    </div>
                    <ShowProject props={props}></ShowProject>
                </div>
            </Card>
        </>
    );
}
export default ProjectCards;
