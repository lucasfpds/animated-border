import { useState } from "react";
import { Container, CustomCard, Button } from "./styles";

export default function Home() {
  const [isCardAnimated, setIsCardAnimated] = useState(false);

  return (
    <Container>
      <CustomCard isCardAnimated={isCardAnimated}>
        <h1>Styled Components</h1>
        <hr />
        <p>
          Styled Components is a CSS-in-JS library that allows you to write
          actual CSS code to style your components. It also removes the mapping
          between components and styles – using components as a low-level styling
          construct could not be easier!
        </p>
        <hr />
        <Button onClick={() => setIsCardAnimated(!isCardAnimated)}>
          {isCardAnimated ? "Stop" : "Start"} Animation
        </Button>
      </CustomCard>
    </Container>
  );
}
