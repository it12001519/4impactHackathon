import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { EnvelopeAt, Phone, ShopWindow } from "react-bootstrap-icons";
import Navigation from "./Navigation";
import ChartReport from "./ChartReport";
import StatReport from "./StatReport";
import ViewJobStatus from "./ViewJobStatus";
import NewJobPosting from "./NewJobPosting";

function AdminDashboard() {
  return (
    <>
      <Container>
        <Navigation />
        <Row>
          <Col md={3}>
            <Card className="employee-profile box-shadow" border="light">
              <Card.Body className="text-center">
                <Card.Img
                  variant="top"
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: "150px" }}
                />
                <Card.Title>Admin</Card.Title>
                <Card.Text>HR Specialist</Card.Text>
                <Card.Text>4impact Philippines</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Card.Text>
                  <EnvelopeAt style={{ marginRight: "15px" }} />{" "}
                  admin@4impact.com.au
                </Card.Text>
                <Card.Text>
                  <Phone style={{ marginRight: "15px" }} /> (+63) 000 000 0000
                </Card.Text>
              </Card.Footer>
            </Card>
            <br />
            <Card className="employee-profile box-shadow" border="light">
              <Card.Body className="text-center">
                <Card.Img
                  variant="top"
                  src="src/assets/dollar.png"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: "80px" }}
                />
                <Card.Title>Total Reward Points 723</Card.Title>

                <div className="d-grid gap-2">
                  <Button variant="outline-dark">
                    <ShopWindow style={{ marginTop: "-3px" }} /> Shop
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={9}>
            <ChartReport />
            <br />
            <StatReport />
            <br />
            <Row className="box-shadow">
              <NewJobPosting />

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
