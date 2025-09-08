import { Button, Card, Col, Container, Form, InputGroup, Row } from "react-bootstrap"
import { Lock, PersonCircle } from "react-bootstrap-icons"
import { useNavigate } from "react-router-dom"

function Login () {
    let naviagte = useNavigate()
    const toProfile = () => {
        naviagte('/profile')
    }

    return <>
        <Container>
            <Row className="justify-content-md-center align-middle">
                <Col md={3}> 
                    <Card className='login box-shadow' border="light">
                        <Card.Body>
                            <Card.Title>Welcome</Card.Title>
                            <Form>
                                <Form.Group className="mb-3" controlId="username">
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1"><PersonCircle /></InputGroup.Text>
                                        <Form.Control
                                        placeholder="Username"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                        type="text"
                                        defaultValue='john.doe'
                                        />
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="password">
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1"><Lock /></InputGroup.Text>
                                        <Form.Control
                                        placeholder="Password"
                                        aria-label="Password"
                                        aria-describedby="basic-addon1"
                                        type="password"
                                        defaultValue='password'
                                        />
                                    </InputGroup>
                                </Form.Group>
                            </Form>
                            <div className="d-grid gap-2">
                                <Button variant="primary" onClick={toProfile}>
                                    Login
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        
    </>
}

export default Login