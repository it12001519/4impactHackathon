import { Button, Card } from "react-bootstrap";
import { EnvelopeAt, Phone, ShopWindow } from "react-bootstrap-icons";

function AdminProfile() {
  return (
    <>
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
            <EnvelopeAt style={{ marginRight: "15px" }} /> admin@4impact.com.au
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
    </>
  );
}

export default AdminProfile;
