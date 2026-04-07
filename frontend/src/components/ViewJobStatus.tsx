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

interface ViewJobStatusProps {
  jobTitle?: string;
  jobId?: string;
}

const ViewJobStatus = ({ jobTitle, jobId }: ViewJobStatusProps) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  const toNewCandidateForm = () => {
    navigate("/new-candidate?user=Admin");
  };

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
                  <span>Candidate John Smith</span>
                </Col>
                <Col md={6} className="text-end">
                  <span>Progress: New Candidate</span>
                </Col>
              </Row>
            </Col>
            <Col md={3}>
              <ButtonGroup size="sm">
                <Button variant="primary" onClick={toNewCandidateForm}>
                  Review
                </Button>
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
