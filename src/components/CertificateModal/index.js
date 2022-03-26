import React from 'react';
import { Modal, Button, Col } from 'react-bootstrap';
import Certificate from '../Certificate/index'
import certificate from '../../assets/documents/certificate.pdf'
// import { render } from 'express/lib/response';

function CertificateModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="certificate-preview"
            centered
        >
            <Modal.Header closeButton>
              <Modal.Title id="certificate-title">
                  Proof
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Col fluid className='certificateContactWrapper container'>
                    <Certificate className="certImg"/>
              </Col>
            </Modal.Body>
            <Modal.Footer>
                <p>
                  Open in new tab
                    <a className="pdfDownload" href={ certificate } target="_blank" rel="noreferrer">here.</a>
                </p>
                <br />
                <Button onClick={props.onHide}>I accept your proof</Button>
            </Modal.Footer>
        </Modal>
    )
}

function OpenCertificateModal(props) {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Button variant="link " onClick={() =>
            setModalShow(true)}>
                <h2 className="contact-header" > I am full-stack certified!</h2>
            </Button>
            <CertificateModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}

// render(<openCertificateModal/>);

export default OpenCertificateModal;