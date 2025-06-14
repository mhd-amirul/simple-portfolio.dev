import React from "react";
import Card from "react-bootstrap/Card";
import { getSystemResources } from "../../lib/sanity/sanityService";

function AboutCard() {
    const systemResources = getSystemResources();
    let index = Math.floor(Math.random() * systemResources.quotes.length);

    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p className="about-text">{systemResources.about}</p>
                    <br />
                    <p style={{ color: "#145e79" }}>
                        <b>
                            <i>{systemResources.quotes[index].quote}</i>
                        </b>
                    </p>
                    <footer className="blockquote-footer">
                        <b>
                            <i>{systemResources.quotes[index].author}</i>
                        </b>
                    </footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;
