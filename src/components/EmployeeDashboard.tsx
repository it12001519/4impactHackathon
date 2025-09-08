import { Container, Row, Col, Card, Button, Tabs, Tab, Badge} from 'react-bootstrap';
import {EnvelopeAt, Phone, ShopWindow} from "react-bootstrap-icons"
import { useState } from 'react';
import Navigation from './Navigation';
import Achievements from './Achivements';
import JobPosting from './JobPosting';
import Status from './ReferralStatus';
import Rewards from './RewardsTable';

function EmployeeDashboard () {

    const [key, setKey] = useState('achivements')
  
  return<>
    <Container>
      <Navigation />
      <Row>
        <Col md={3}>
          <Card className="employee-profile box-shadow" border="light">
              <Card.Body className="text-center">
                  <Card.Img variant='top' src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp'
                  alt='avatar'
                  className="rounded-circle"
                  style={{width: '150px'}} />
                  <Card.Title>John Doe</Card.Title>
                  <Card.Text>Software Engineer</Card.Text>
                  <Card.Text>4impact Philippines</Card.Text>
              </Card.Body>
              <Card.Footer>
                  <Card.Text><EnvelopeAt style={{marginRight: '15px'}} /> johndoe@4impact.com.au</Card.Text>
                  <Card.Text><Phone style={{marginRight: '15px'}} /> (+63) 000 000 0000</Card.Text>
              </Card.Footer>
          </Card>
          <br />
          <Card className="employee-profile box-shadow" border="light">
              <Card.Body className="text-center">
                  <Card.Img variant='top' src='src/assets/dollar.png'
                  alt='avatar'
                  className="rounded-circle"
                  style={{width: '80px'}} />
                  <Card.Title>Total Reward Points 550</Card.Title>
                  
                  <div className="d-grid gap-2">
                      <Button variant="outline-dark"><ShopWindow style={{marginTop: '-3px'}} /> Shop</Button>
                  </div>
              </Card.Body>
          </Card>
        </Col>
        <Col md={9}>
          <Tabs
            activeKey={key}
            onSelect={(eventKey) => setKey(eventKey)}
            className="mb-3"
            fill
          >
            <Tab eventKey="achivements" className='box-shadow'  title="Achievements">
              <Achievements />
            </Tab>
            <Tab eventKey="jobPostings" className='box-shadow' title={<>Job Postings <Badge bg='danger' style={{marginLeft: '5px'}}>4</Badge></>}>
              <JobPosting />
            </Tab>
            <Tab eventKey="referralStatus" className='box-shadow' title="Referral Status">
              <Status />
            </Tab>
            <Tab eventKey="rewards" className='box-shadow' title="Rewards">
              <Rewards />
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  </>
}

export default EmployeeDashboard