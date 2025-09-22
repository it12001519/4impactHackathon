import { Card, Col, Row } from "react-bootstrap";
import { FileEarmarkFill, PersonCheckFill, WalletFill } from "react-bootstrap-icons";

export default function StatReport () {

    return<>
        <Row>
            <Col md={4}>
                <Card className="box-shadow admin-reports" border="light">
                    <Card.Body>
                        <Card.Title className='admin-report-title'>Reward Points Given <WalletFill style={{float: 'right'}} /></Card.Title>
                        <Card.Title className='admin-report-count'>3205</Card.Title>
                        <Card.Subtitle>32% Increase from previous month</Card.Subtitle>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card className="box-shadow admin-reports" border="light">
                    <Card.Body>
                        <Card.Title className='admin-report-title'>Monthly Referred Candidates <FileEarmarkFill style={{float: 'right'}} /></Card.Title>
                        <Card.Title className='admin-report-count'>88</Card.Title>
                        <Card.Subtitle>13% Increase from previous month</Card.Subtitle>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card className="box-shadow admin-reports" border="light">
                    <Card.Body>
                        <Card.Title className='admin-report-title'>Newly Hired Candidates <PersonCheckFill style={{float: 'right'}} /></Card.Title>
                        <Card.Title className='admin-report-count'>3</Card.Title>
                        <Card.Subtitle>2% Increase from previous month</Card.Subtitle>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </>
}