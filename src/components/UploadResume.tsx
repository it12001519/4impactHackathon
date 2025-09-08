import { useState } from 'react';
import { Modal, Button, Form, Row, InputGroup } from 'react-bootstrap';
import {Upload} from 'react-bootstrap-icons';

interface UploadResumeProps {
    jobTitle ?: string;
    jobDescription ?: string;
}

const UploadResume = ({jobTitle, jobDescription} : UploadResumeProps) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
return <>
    <Button className='col-12' variant='outline-dark' onClick={handleShow} size="sm">View More</Button>

    <Modal 
        show={show} onHide={handleClose} 
        backdrop="static" 
        keyboard={false} 
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
            <Modal.Title>Candidate for {jobTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Modal.Title>Job Description</Modal.Title>
                <p>We are looking for an experienced and creative Bootstrap Developer to join our team! As a Twitter Bootstrap Developer 
                    you will be responsible for translation of the UI/UX designs to actual code with which we will produce visual elements 
                    of the application based on user behaviors and interactions.</p>
            </Row>
            <Row>
                <Modal.Title>Responsibilities</Modal.Title>
                <ul>
                    <li>Develop code for the targeted environment</li>
                    <li>Participate in architectural discussions</li>
                    <li>Investigate user behavior and interface usage</li>
                    <li>Support and maintain existing production code</li>
                </ul>
            </Row>
            <Row>
                <Modal.Title>Requirements and Qualifications</Modal.Title>
                <ul>
                    <li>X years of experience as a Bootstrap Developer or similar role</li>
                    <li>X year of experience with MySql, including advanced database design, query generation, performance tuning and profiling in high volume environment</li>
                    <li>X year of experience with Design Patterns, Zend Framework, Strong Web 2.0/RIA</li>
                    <li>X year of experience in designing, implementing, developing and delivering advanced PHP web applications</li>
                    <li>Great interpersonal and communication skills</li>
                    <li>Critical thinker and problem-solving skills</li>
                </ul>
            </Row>
        </Modal.Body>
        <Modal.Footer>
            <InputGroup className='mb-3'>
                <Form.Control type="file" size="lg" />
                <Button variant='primary' onClick={handleClose}><Upload/> Upload</Button>
            </InputGroup>
        </Modal.Footer>
    </Modal>

</>
}

export default UploadResume;