import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";



function HomePage() {
  return (
    <Container>
        <Row className="px-4 my-5">
            <Col xs={4} sm={6}>   
                <Image src="/img/RYELogoBlackSphere.png" alt="Logo"/> 
            </Col>
            <Col sm={6}>   
                <h1 className="font-weight-light">RYE Amplified™ Technologies</h1>
                <p>Amplifying the voices of the Rye community</ p>
                <Button variant="primary">Learn More</Button>   
            </Col>
        </Row>
    </Container>
  );
}

export default HomePage;   