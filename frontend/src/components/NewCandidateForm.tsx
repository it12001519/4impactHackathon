import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import Navigation from "./Navigation";
import { Paperclip } from "react-bootstrap-icons";
import AdminProfile from "./AdminProfile";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NewCandidateForm() {
  const navigate = useNavigate();

  const toSubmit = () => {
    const rewards = {
      name: "john doe",
      email: "john.doe@mock.com",
      points: 100,
    };
    const rewardCount = parseInt(localStorage.getItem("referralCount")) + 100;
    localStorage.setItem("referralCount", String(rewardCount));

    axios
      .put("http://localhost:8080/api/employees/1/points", rewards)
      .catch((error) => console.error(error));

    navigate("/admin?user=Admin");
  };

  return (
    <>
      <Container>
        <Navigation />
        <Row>
          <Col md={3}>
            <AdminProfile />
          </Col>
          <Col md={9} className="box-shadow">
            <Row>
              <Button className="mb-4 col-3 float-end">
                <Paperclip /> Download Resume
              </Button>
            </Row>
            <Form>
              <FloatingLabel
                controlId="firstName"
                label="First Name"
                className="mb-4"
              >
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  value="John"
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="middleName"
                label="Middle Name"
                className="mb-4"
              >
                <Form.Control
                  type="text"
                  placeholder="Middle Name"
                  value="Santos"
                />
              </FloatingLabel>

              <Row className="mb-4">
                <Form.Group
                  as={Col}
                  className="col-10"
                  controlId="formGridLastName"
                >
                  <FloatingLabel controlId="lastName" label="Last Name">
                    <Form.Control
                      type="text"
                      placeholder="Last Name"
                      value="Smith"
                    />
                  </FloatingLabel>
                </Form.Group>

                <Form.Group
                  as={Col}
                  className="col-2"
                  controlId="formGridNameSufix"
                >
                  <FloatingLabel controlId="lastName" label="Name Suffix">
                    <Form.Control
                      type="text"
                      placeholder="Name Suffix"
                      value="N/A"
                    />
                  </FloatingLabel>
                </Form.Group>
              </Row>

              <FloatingLabel
                controlId="contactNumber"
                label="Contact Number"
                className="mb-4"
              >
                <Form.Control
                  type="text"
                  placeholder="Contact Number"
                  value="+63 000 000 0000"
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="emailAddress"
                label="Email Address"
                className="mb-4"
              >
                <Form.Control
                  type="text"
                  placeholder="Email Address"
                  value="john.egtapen@gmail.com"
                />
              </FloatingLabel>

              <Row className="mb-4">
                <Form.Group as={Col} controlId="formGridCity">
                  <FloatingLabel controlId="city" label="City">
                    <Form.Control
                      type="text"
                      placeholder="Taguig"
                      value="Baguio"
                    />
                  </FloatingLabel>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridRegion">
                  <FloatingLabel as={Col} controlId="region" label="Region">
                    <Form.Control type="text" placeholder="NCR" value="CAR" />
                  </FloatingLabel>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridCountry">
                  <FloatingLabel
                    controlId="country"
                    label="Country"
                    className="mb-4"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Philippines"
                      value="Philippines"
                    />
                  </FloatingLabel>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZipCode">
                  <FloatingLabel
                    controlId="zipCode"
                    label="Zip Code"
                    className="mb-4"
                  >
                    <Form.Control type="text" placeholder="0000" value="2600" />
                  </FloatingLabel>
                </Form.Group>
              </Row>
              <Row>
                <Button className="mb-4 col-3 float-end" onClick={toSubmit}>
                  {" "}
                  Submit
                </Button>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default NewCandidateForm;
