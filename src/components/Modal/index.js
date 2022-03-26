import React from 'react';
import { Modal, Button, Col } from 'react-bootstrap';
import Certificate from '../Certificate/index';
import certificate from '../../assets/documents/certificate.pdf';
// import certImg from '../../assets/images/misc/certificate-image';
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
                  Proof of Credentials
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Col className='certificateContactWrapper container'>
              <p>
                 That's 25 CEUs right <a className="pdfDownload" href={ certificate } target="_blank" rel="noreferrer">here!</a>
                </p>
              </Col>
            </Modal.Body>
            <Modal.Footer>
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
                <h2 className="contact-header" >
                <a className="pdfDownload" href={ certificate } target="_blank" rel="noreferrer">
                I am full-stack certified!</a></h2>
            </Button>
            {/* <CertificateModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            /> */}
        </>
    )
}

// render(<openCertificateModal/>);

export default OpenCertificateModal;