import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from '../../amplifyconfiguration.json';
Amplify.configure(config);

function HomePage({ signOut }) {
  return (
    <>
    <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      marginLeft: "0em",
      marginRight: "0em",
      background: "indigo",
      width: "100%",
    }}
  >
    <h1 style={{ marginLeft: "1em", color: "aliceblue" }}>
      Welcome to Rye Technologies
    </h1>
    <button
      onClick={signOut}
      style={{ height: "90%", marginRight: "2em", marginTop: "0.75em" }}
    >
      Sign out
    </button>
  </div>
    <Container>
        <Row className="px-4 my-5">
            <Col xs={4} sm={6}>   
                <Image src="/RYELogoBLackSphere.png" fluid alt="Logo"/> 
            </Col>
            <Col sm={6}>   
                <h1 className="font-weight-light">RYE Amplified™ Technologies</h1>
                <p>Amplifying the voices of the Rye community</ p>
                <Button variant="primary">Learn More</Button>   
            </Col>
        </Row>
    </Container>
    </>

  );
}

export default withAuthenticator(HomePage);   