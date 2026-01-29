import Button from "./component/Button";
import Form from "./component/Form";
import Input from "./component/Input";

function App() {
  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
  }

  return (
    <>
      <main>
        <Form onSave={handleSave}>
          <Input id="name" label="Name" type="text"></Input>
          <Input id="age" label="Age" type="Number"></Input>
          <p>
            <Button el="button">Save</Button>
          </p>
        </Form>
      </main>
    </>
  )
}

export default App;
