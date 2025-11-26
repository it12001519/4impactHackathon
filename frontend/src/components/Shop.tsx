import {
  Container,
  Row,
  Col,
  Card,
  Button
} from "react-bootstrap";
import Navigation from "./Navigation";
import { EnvelopeAt, Phone, ShopWindow } from "react-bootstrap-icons";
import ShopButton from "./ShopButton";

export default function Shop() {
const iframe = '<iframe src="https://www.abenson.com/" width="100%" height="900"></iframe>';
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
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: "150px" }}
                />
                <Card.Title>John Doe</Card.Title>
                <Card.Text>Software Engineer</Card.Text>
                <Card.Text>4impact Philippines</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Card.Text>
                  <EnvelopeAt style={{ marginRight: "15px" }} />{" "}
                  johndoe@4impact.com.au
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
                <Card.Title>Total Reward Points 550</Card.Title>

                <ShopButton />
              </Card.Body>
            </Card>
          </Col>
          <Col md={9}>
            <div dangerouslySetInnerHTML={{__html: iframe}} />
          </Col>
        </Row>
      </Container>
    </>
  );
}