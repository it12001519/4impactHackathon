import { useState } from "react";
import { Button, Card, Col, Form, Modal } from "react-bootstrap";
import { PlusCircleDotted } from "react-bootstrap-icons";
import DefaultEditor from "react-simple-wysiwyg";

export default function NewJobPosting() {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setJobTitle("");
    setJobDescHtml("");
    setJobRespHtml("");
    setJobQualHtml("");
    setPrioJobPosting(false);
  };

  const handleShow = () => setShow(true);

  const [jobDescHtml, setJobDescHtml] = useState("");
  const [jobRespHtml, setJobRespHtml] = useState("");
  const [jobQualHtml, setJobQualHtml] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [prioJobPosting, setPrioJobPosting] = useState(false);

  const postJobPosting = () => {
    let jobPostingData = {
      jobTitle: jobTitle,
      jobDesc: jobDescHtml,
      jobResp: jobRespHtml,
      jobQual: jobQualHtml,
      hardToFillRole: prioJobPosting,
      postedBy: "admin-user",
    };

    handleClose();

    console.log("data: ", JSON.stringify(jobPostingData));
  };

  return (
    <>
      <Col md={4}>
        <Card className="job-posting-card">
          <Card.Body>
            <Card.Title>Add New Job Posting</Card.Title>
            <Card.Text className="text-center">
              <PlusCircleDotted
                onClick={handleShow}
                style={{
                  fontSize: "150px",
                  marginTop: "12px",
                  color: "#7a7a7aff",
                  cursor: "pointer",
                }}
              />
            </Card.Text>
          </Card.Body>
        </Card>

        <Modal
          id="job-posting"
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>New Job Posting</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Label>Job Title:</Form.Label>
            <Form.Control
              type="text"
              id="jobTitle"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
            />

            <Form.Label>Job Description:</Form.Label>
            <DefaultEditor
              value={jobDescHtml}
              onChange={(e) => setJobDescHtml(e.target.value)}
            />

            <Form.Label>Responsibilities:</Form.Label>
            <DefaultEditor
              value={jobRespHtml}
              onChange={(e) => setJobRespHtml(e.target.value)}
            />

            <Form.Label>Requirements and Qualifications:</Form.Label>
            <DefaultEditor
              value={jobQualHtml}
              onChange={(e) => setJobQualHtml(e.target.value)}
            />
          </Modal.Body>
          <Modal.Footer>
            <Form.Check
              style={{ margin: "0 auto" }}
              type="switch"
              id="custom-switch"
              label="Hard to fill job position"
              defaultChecked={prioJobPosting}
              onChange={() => setPrioJobPosting(!prioJobPosting)}
            />
            <Button
              className="col-6"
              variant="primary"
              onClick={postJobPosting}
            >
              Post
            </Button>
          </Modal.Footer>
        </Modal>
      </Col>
    </>
  );
}
