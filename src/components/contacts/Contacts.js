import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";

function Contacts() {
  return (
    <Container>
      <Row className="px-4 my-5">
        <Col>
          <h1>Contacts</h1>
        </Col>
      </Row>
      <Row>
        <Col className="px-2 my-2">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/img/RyeFormal3.png" />
            <Card.Body>
              <Card.Title>Rye Koralzkie</Card.Title>
              <Card.Text>
                    SpakSoft Intern Trainee
                    <br />123.456.7890
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Contacts;
