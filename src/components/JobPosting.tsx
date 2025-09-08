import UploadResume from './UploadResume';
import {Card, Badge, Col, Row} from 'react-bootstrap'

function JobPostingTable (){

    return <>
        <Row style={{padding: '0px 20px 0 20px'}}>
            <Col md={4}>
                <Card className='job-posting-card'>
                    <Card.Body>
                        <Card.Title>Marketing Assistant <Badge bg='danger'>5</Badge></Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea commodo consequat.
                        </Card.Text>
                        <UploadResume jobTitle='Marketing Assistant' jobDescription='test' />
                        <Card.Footer className='text-center'>Posted 2 days ago</Card.Footer>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card className='job-posting-card'>
                    <Card.Body>
                        <Card.Title>Software Engr. Intern <Badge bg='danger'>3</Badge></Card.Title>
                        <Card.Text>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis 
                            praesentium voluptatum deleniti atque corrupti quos dolores et.
                        </Card.Text>
                        <UploadResume jobTitle='Software Engr. Intern' jobDescription='test' />
                        <Card.Footer className='text-center'>Posted 8 days ago</Card.Footer>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card className='job-posting-card'>
                    <Card.Body>
                        <Card.Title>Operations Lead <Badge bg='danger'>7</Badge></Card.Title>
                        <Card.Text>
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
                            Neque porro quisquam est, qui dolorem.
                        </Card.Text>
                        <UploadResume jobTitle='Operations Lead' jobDescription='test' />
                        <Card.Footer className='text-center'>Posted 6 days ago</Card.Footer>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card className='job-posting-card'>
                    <Card.Body>
                        <Card.Title>Accountant <Badge bg='danger'>2</Badge></Card.Title>
                        <Card.Text>
                            Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe 
                            eveniet ut et voluptates repudiandae sint et molestiae non recusandae. 
                            Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus 
                            maiores alias consequatur aut perferendis doloribus asperiores repellat.
                        </Card.Text>
                        <UploadResume jobTitle='Accountant' jobDescription='test' />
                        <Card.Footer className='text-center'>Posted 11 days ago</Card.Footer>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </>
}

export default JobPostingTable;