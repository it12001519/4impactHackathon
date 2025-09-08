import { Row, Col } from "react-bootstrap"
import { Card, Image } from "react-bootstrap"

function Achievements () {
    return <>
        <Row className="text-center employee-badges ">
            <Col md={4}>
                <Image src='src/assets/diamond.png' />
                <Card.Title>Consecutive Referrals</Card.Title>
            </Col>
            <Col md={4}>
                <Image src='src/assets/flag.png' />
                <Card.Title>First Successful Referral</Card.Title>
            </Col>
            <Col md={4}>
                <Image src='src/assets/connection.png' />
                <Card.Title>Increased Network</Card.Title>
            </Col>
            <Col md={4}>
                <Image src='src/assets/championship-trophy.png' />
                <Card.Title>Leaderboard Contender</Card.Title>
            </Col>
            <Col md={4}>
                <Image src='src/assets/insignia.png' />
                <Card.Title>Most Verified Referrals</Card.Title>
            </Col>
            <Col md={4}>
                <Image src='src/assets/rewards.png' />
                <Card.Title>Pioneer</Card.Title>
            </Col>
            <Col md={4}>
                <Image src='src/assets/shopping-cart.png' />
                <Card.Title>First Purchase</Card.Title>
            </Col>
            <Col md={4}>
                <Image src='src/assets/high-quality.png' />
                <Card.Title>Trail Blazer</Card.Title>
            </Col>
        </Row>
    </>
}

export default Achievements