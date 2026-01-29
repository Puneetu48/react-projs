import { useRef } from "react";
import Button from "./component/Button";
import Form, { type FormHandle } from "./component/Form";
import Input from "./component/Input";

function App() {
  const customForm = useRef<FormHandle>(null);

  function handleSave(data: unknown) {
    // const extractedData = data as { name: string; age: string };
    if (
      !data ||
      typeof data !== "object" ||
      !("name" in data) ||
      !("age" in data)
    ) {
      return;
    }

    // at this point, TypeScript knows that data MUST BE an object
    // with a name and age property
    // otherwise, the previous if statement would have returned
    console.log(data);
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
