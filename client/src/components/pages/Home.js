import React from "react";
import { Container, Row, Column } from "../components";

export function Home() {
  return (
    <Container className="mt-5">
      <Row>
        <Column>
          <h1>Home</h1>
          <p>A super simplistic example of a fullstack app using Express, React, and Passport.</p>
        </Column>
      </Row>
    </Container>
  );
}
