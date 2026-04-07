import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import Navigation from "./Navigation";
import ChartReport from "./ChartReport";
import StatReport from "./StatReport";
import ViewJobStatus from "./ViewJobStatus";
import NewJobPosting from "./NewJobPosting";
import AdminProfile from "./AdminProfile";
import { useEffect, useState } from "react";
import axios from "axios";
import ViewJobStatusRealCount from "./ViewJobStatusRealCount";

function AdminDashboard() {
  const [jobPostings, setJobPostings] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/api/jobs").then((response) => {
      setJobPostings(response.data);
    });
  }, []);

  return (
    <>
      <Container>
        <Navigation />
        <Row>
          <Col md={3}>
            <AdminProfile />
          </Col>
          <Col md={9}>
            <ChartReport />
            <br />
            <StatReport />
            <br />
            <Row className="box-shadow">
              <NewJobPosting />
              {jobPostings.map((jobPost) => (
                <Col key={jobPost.id} md={4}>
                  <Card className="job-posting-card">
                    <Card.Body>
                      <Card.Title>
                        {jobPost.jobTitle}{" "}
                        <Badge bg="danger">{jobPost.referrals.length}</Badge>
                      </Card.Title>
                      <Card.Text>
                        <p
                          dangerouslySetInnerHTML={{ __html: jobPost.jobDesc }}
                        ></p>
                      </Card.Text>
                      <ViewJobStatus jobId={jobPost.id} />
                      <Card.Footer className="text-center">
                        Posted now
                      </Card.Footer>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
              <Col md={4}>
                <Card className="job-posting-card">
                  <Card.Body>
                    <Card.Title>
                      Software Engr. Intern <Badge bg="danger">3</Badge>
                    </Card.Title>
                    <Card.Text>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti quos dolores et.
                    </Card.Text>
                    <ViewJobStatus
                      jobTitle="Software Engr. Intern"
                      jobId="JP331"
                    />
                    <Card.Footer className="text-center">
                      Posted 8 days ago
                    </Card.Footer>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="job-posting-card">
                  <Card.Body>
                    <Card.Title>
                      Operations Lead <Badge bg="danger">7</Badge>
                    </Card.Title>
                    <Card.Text>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem.
                    </Card.Text>
                    <ViewJobStatus jobTitle="Operations Lead" jobId="JP021" />
                    <Card.Footer className="text-center">
                      Posted 6 days ago
                    </Card.Footer>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AdminDashboard;
