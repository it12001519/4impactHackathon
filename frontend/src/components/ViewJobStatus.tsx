import { useState } from "react";
import {
  Modal,
  Button,
  Row,
  Col,
  ProgressBar,
  ButtonGroup,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

interface UploadResumeProps {
  jobTitle?: string;
  jobId?: string;
}

const ViewJobStatus = ({ jobTitle, jobId }: UploadResumeProps) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let navigate = useNavigate();

  const toNewCandidateForm = () => {
    navigate("/new-candidate?user=Admin")
  }

  return (
    <>
      <Button
        className="col-12"
        variant="outline-dark"
        onClick={handleShow}
        size="sm"
      >
        View More
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Candidates for {jobTitle} #{jobId}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="referral-status">
            <Col md={9}>
              <Row>
                <Col md={6} className="h6">
                  <span>Candidate John Doe</span>
                </Col>
                <Col md={6} className="text-end">
                  <span>Progress: HR Interview</span>
                </Col>
              </Row>
            </Col>
            <Col md={3}>
              <ButtonGroup size="sm">
                <Button variant="danger">Fail</Button>
                <Button variant="success">Proceed</Button>
              </ButtonGroup>
            </Col>
            <Col md={9}>
              <ProgressBar animated variant="info" now={30} />
            </Col>
          </Row>
          <Row className="referral-status">
            <Col md={9}>
              <Row>
                <Col md={6} className="h6">
                  <span>Candidate Martha Agila</span>
                </Col>
                <Col md={6} className="text-end">
                  <span>Progress: Client Interview</span>
                </Col>
              </Row>
            </Col>
            <Col md={3}>
              <ButtonGroup size="sm">
                <Button variant="danger">Fail</Button>
                <Button variant="success">Proceed</Button>
              </ButtonGroup>
            </Col>
            <Col md={9}>
              <ProgressBar animated variant="info" now={60} />
            </Col>
          </Row>
          <Row className="referral-status">
            <Col md={9}>
              <Row>
                <Col md={6} className="h6">
                  <span>Candidate Mark Santos</span>
                </Col>
                <Col md={6} className="text-end">
                  <span>Progress: New Candidate</span>
                </Col>
              </Row>
            </Col>
            <Col md={3}>
              <ButtonGroup size="sm">
                <Button variant="primary" onClick={toNewCandidateForm}>Review</Button>
              </ButtonGroup>
            </Col>
            <Col md={9}>
              <ProgressBar animated variant="info" now={5} />
            </Col>
          </Row>
          <Row className="referral-status">
            <Col md={9}>
              <Row>
                <Col md={6} className="h6">
                  <span>Candidate Troy Smith</span>
                </Col>
                <Col md={6} className="text-end">
                  <span>Progress: Failed Technical Interview</span>
                </Col>
              </Row>
            </Col>
            <Col md={9}>
              <ProgressBar animated variant="danger" now={50} />
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ViewJobStatus;
