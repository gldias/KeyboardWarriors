import React from "react";
import kbWarriorsLogo from "../../resources/keyboardWarriors.png";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export const Landing = () => {
  return (
    <Container>
      <img src={kbWarriorsLogo} alt={"A black and orange helmet"} />
      <h1>Keyboard Warriors</h1>
      <Row className="justify-content-md-center landing-row">
        <Col xs={2}>
          <Button className={"landing-button"} variant={"primary"}>
            Fight!
          </Button>
        </Col>
        <Col xs={{span: 2, offset: 1}}>
          <Button className={"landing-button"} variant={"primary"}>
            Leaderboard
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
