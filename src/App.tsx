import React from "react";
import { Container } from "./atomic/layout/common.layout";
import Player from "./atomic/organisms/video";

function App() {
  return (
    <Container>
      <Player
        width="100%"
        height="500px"
        url="https://res.cloudinary.com/code-comunity/video/upload/v1630813079/samples/elephants.mp4"
      />
    </Container>
  );
}

export default App;
