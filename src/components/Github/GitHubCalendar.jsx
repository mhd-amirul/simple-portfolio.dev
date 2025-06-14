import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import { getSystemResources } from "../../lib/sanity/sanityService";

function GitHubCalendarComponent() {
    const systemResources = getSystemResources();
    return (
        <Row className="custom-row-github-calender">
            <GitHubCalendar
                username={systemResources?.github_calendar}
                blockSize={15}
                blockMargin={5}
                hideColorLegend="true"
                color="#2596be"
                fontSize={12}
                colorScheme="dark"
            />
        </Row>
    );
}

export default GitHubCalendarComponent;
