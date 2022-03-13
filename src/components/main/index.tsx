import React from "react";
import { Container } from "react-bootstrap";

import { Button } from "@components";

export const Main: React.FC = () => {
  return (
    <div className="text-center py-4" style={{ backgroundColor: "#282c34" }}>
      <Container>
        <h1 className="display-2 text-white">Tricentis</h1>
        <p className="lead text-white">
        Tricentis Frontend Example
        </p>
        <Button
          variant="primary"
          size="lg"
          href="https://github.com/gyanverma2/Tricentis-Frontend-Challenge/"
          target="_blank"
        >
          GitHub
        </Button>
      </Container>
    </div>
  );
};
