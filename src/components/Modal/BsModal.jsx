import React from "react";
import { Card, Button, Modal } from "react-bootstrap";

function BsModal(props) {
    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                className="modal-custom-class"
                centered>
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {props.datas.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Card.Img
                        variant="top"
                        src={props.datas.imgPath}
                        alt="card-img"
                        style={{ borderRadius: "50%" }}
                        className="image-overlay"
                    />
                    <h4 className="mt-4">Description</h4>
                    <p>{props.datas.description}</p>
                    <h4 className="mt-4">Key Features</h4>
                    <div className="tags-badge">
                        {props.datas.others.keywords.map((query, index) => {
                            return (
                                <Button
                                    variant="secondary"
                                    key={index}
                                    disabled>
                                    {query}
                                </Button>
                            );
                        })}
                    </div>
                    <h4 className="mt-4">Technologies Used</h4>
                    <div className="tags-badge">
                        {props.datas.others.technologies.map((query, index) => {
                            return (
                                <Button
                                    variant="secondary"
                                    key={index}
                                    disabled>
                                    {query}
                                </Button>
                            );
                        })}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        onClick={(e) => {
                            window.open(props.datas.demoLink, "_blank");
                        }}>
                        Visit Page
                    </Button>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

function CallBsModal(props) {
    const [modalShow, setModalShow] = React.useState(props.isShowed);

    return (
        <>
            <h3
                id="trigger-modal"
                className="text-lowercase animated-underline mb-3"
                onClick={() => setModalShow(true)}>
                {props.props.title}
            </h3>
            <BsModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                className="modal-custom-class"
                datas={props.props}
            />
        </>
    );
}

export default CallBsModal;
