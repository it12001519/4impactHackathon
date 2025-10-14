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

function NewCandidateForm() {
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
                <Form.Control type="text" placeholder="First Name" />
              </FloatingLabel>

              <FloatingLabel
                controlId="middleName"
                label="Middle Name"
                className="mb-4"
              >
                <Form.Control type="text" placeholder="Middle Name" />
              </FloatingLabel>

              <Row className="mb-4">
                <Form.Group as={Col} className="col-10" controlId="formGridLastName">
                  <FloatingLabel controlId="lastName" label="Last Name">
                    <Form.Control type="text" placeholder="Last Name" />
                  </FloatingLabel>
                </Form.Group>

                <Form.Group as={Col} className="col-2" controlId="formGridNameSufix">
                  <FloatingLabel controlId="lastName" label="Name Suffix">
                    <Form.Control type="text" placeholder="Name Suffix" />
                  </FloatingLabel>
                </Form.Group>
              </Row>

              <FloatingLabel
                controlId="contactNumber"
                label="Contact Number"
                className="mb-4"
              >
                <Form.Control type="text" placeholder="Contact Number" />
              </FloatingLabel>

              <FloatingLabel
                controlId="emailAddress"
                label="Email Address"
                className="mb-4"
              >
                <Form.Control type="text" placeholder="Email Address" />
              </FloatingLabel>

              <FloatingLabel
                controlId="streetAddress1"
                label="Street Address 1"
                className="mb-4"
              >
                <Form.Control type="text" placeholder="Street Address 1" />
              </FloatingLabel>

              <FloatingLabel
                controlId="streetAddress2"
                label="Street Address 2"
                className="mb-4"
              >
                <Form.Control type="text" placeholder="Street Address 2" />
              </FloatingLabel>

              <Row className="mb-4">
                <Form.Group as={Col} controlId="formGridCity">
                  <FloatingLabel controlId="city" label="City">
                    <Form.Control type="text" placeholder="Taguig" />
                  </FloatingLabel>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridRegion">
                  <FloatingLabel as={Col} controlId="region" label="Region">
                    <Form.Control type="text" placeholder="NCR" />
                  </FloatingLabel>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridCountry">
                  <FloatingLabel
                    controlId="country"
                    label="Country"
                    className="mb-4"
                  >
                    <Form.Control type="text" placeholder="Philippines" />
                  </FloatingLabel>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZipCode">
                  <FloatingLabel
                    controlId="zipCode"
                    label="Zip Code"
                    className="mb-4"
                  >
                    <Form.Control type="text" placeholder="0000" />
                  </FloatingLabel>
                </Form.Group>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default NewCandidateForm;
