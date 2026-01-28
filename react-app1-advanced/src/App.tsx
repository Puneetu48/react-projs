import Button from "./component/Button";
import Container from "./component/Container";

function App() {
  return (
    <>
      <main>
        <Container el="anchor" as={Button}>Click me</Container>
      </main>
    </>
  )
}

export default App;
