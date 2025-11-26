import axios from "axios";
import { useEffect, useState } from "react";
import { Modal, Button, Form, Row, InputGroup } from "react-bootstrap";
import { Upload } from "react-bootstrap-icons";

interface UploadResumeProps {
  jobId?: number;
}

const UploadResume = ({ jobId }: UploadResumeProps) => {
  const [show, setShow] = useState(false);
  const [jobPost, setJobPost] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    axios.get("http://localhost:8080/api/jobs/"+jobId)
      .then(response => { 
        setJobPost(response.data)
      })
  }, []);

  console.log(jobPost)

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
          <Modal.Title>Candidate for {jobPost.jobTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Modal.Title>Job Description</Modal.Title>
            <p dangerouslySetInnerHTML={{__html: jobPost.jobDesc}}></p>
          </Row>
          <Row>
            <Modal.Title>Responsibilities</Modal.Title>
            <p dangerouslySetInnerHTML={{__html: jobPost.jobResp}}></p>
          </Row>
          <Row>
            <Modal.Title>Requirements and Qualifications</Modal.Title>
            <p>
              <p dangerouslySetInnerHTML={{__html: jobPost.jobQual}}></p>
            </p>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <InputGroup className="mb-3">
            <Form.Control type="file" size="lg" />
            <Button variant="primary" onClick={handleClose}>
              <Upload /> Upload
            </Button>
          </InputGroup>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UploadResume;
