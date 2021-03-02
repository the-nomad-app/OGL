import React from "react";
import { Container, Row, Column } from '../components'

export function NoMatch() {
  return (
    <Container>
      <Row>
        <Column size="md-12">
          <h1>404 Page Not Found</h1>
        </Column>
      </Row>
    </Container>
  );
}
