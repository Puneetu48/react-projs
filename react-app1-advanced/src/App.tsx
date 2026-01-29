import { useRef } from "react";
import Button from "./component/Button";
import Form, { type FormHandle } from "./component/Form";
import Input from "./component/Input";

function App() {
  const customForm = useRef<FormHandle>(null);

  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
    customForm.current?.clear();
  }

  return (
    <>
      <main>
        <Form onSave={handleSave} ref={customForm}>
          <Input id="name" label="Name" type="text"></Input>
          <Input id="age" label="Age" type="Number"></Input>
          <p>
            <Button el="button">Save</Button>
          </p>
        </Form>
      </main>
    </>
  );
}

export default App;
