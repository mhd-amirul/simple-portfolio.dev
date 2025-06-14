import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiIcons, BsIcons, RiIcons, DiIcons, FaIcons } from "../../lib/iconMap";
import { getSystemResources } from "../../lib/sanity/sanityService";

function Toolstack() {
    const systemResources = getSystemResources();

    const tools = systemResources.skill_tools.filter(
        (skill) => skill.type === "tool"
    );

    const availableIcons = {
        ...SiIcons,
        ...BsIcons,
        ...RiIcons,
        ...DiIcons,
        ...FaIcons,
    };

    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            {tools.map((tool, index) => {
                const IconComponent = availableIcons[tool.icon];

                return IconComponent ? (
                    <Col
                        key={index}
                        xs={4}
                        md={2}
                        className="tech-icons"
                        title={tool?.name}>
                        <IconComponent />
                    </Col>
                ) : null;
            })}
        </Row>
    );
}

export default Toolstack;
