import { ProgressBar, Row, Col } from "react-bootstrap";

function ReferralStatus() {
  return (
    <>
      <br />
      <Row className="referral-status">
        <Col md={6} className="h6">
          <span>Candidate for QA Engr: John Doe</span>
        </Col>
        <Col md={6} className="text-end">
          <span>Progress: HR Interview</span>
        </Col>
        <Col md={12}>
          <ProgressBar animated variant="info" now={30} />
        </Col>
      </Row>
      <Row className="referral-status">
        <Col md={6} className="h6">
          <span>Candidate for HR Assistant: Martha Agila</span>
        </Col>
        <Col md={6} className="text-end">
          <span>Progress: Client Interview</span>
        </Col>
        <Col md={12}>
          <ProgressBar animated variant="info" now={60} />
        </Col>
      </Row>
      <Row className="referral-status">
        <Col md={6} className="h6">
          <span>Candidate for Accountant: Mark Santos</span>
        </Col>
        <Col md={6} className="text-end">
          <span>Progress: Awaiting Job Offer</span>
        </Col>
        <Col md={12}>
          <ProgressBar animated variant="success" now={80} />
        </Col>
      </Row>
      <Row className="referral-status">
        <Col md={6} className="h6">
          <span>Candidate for Accountant: Troy Smith</span>
        </Col>
        <Col md={6} className="text-end">
          <span>Progress: Failed Technical Interview</span>
        </Col>
        <Col md={12}>
          <ProgressBar animated variant="danger" now={50} />
        </Col>
      </Row>
    </>
  );
}

export default ReferralStatus;
