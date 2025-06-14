import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiIcons, BsIcons, RiIcons, DiIcons, FaIcons } from "../../lib/iconMap";
import { getSystemResources } from "../../lib/sanity/sanityService";

function Techstack() {
    const systemResources = getSystemResources();

    const skills = systemResources.skill_tools.filter(
        (skill) => skill.type === "skill"
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
            {skills.map((skill, index) => {
                const IconComponent = availableIcons[skill.icon];

                return IconComponent ? (
                    <Col
                        key={index}
                        xs={4}
                        md={2}
                        className="tech-icons"
                        title={skill?.name}>
                        <IconComponent />
                    </Col>
                ) : null;
            })}
        </Row>
    );
}

export default Techstack;
