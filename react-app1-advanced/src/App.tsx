import Button from "./component/Button";

function App() {
  return (
    <>
      <main>
        <p>
          <Button el="button">Click button</Button>
        </p>
        <p>
          <Button el="anchor" href="https://google.com">Link anchor</Button>
        </p>
      </main>
    </>
  )
}

export default App;
