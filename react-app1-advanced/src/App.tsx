import { useRef } from "react";
import Input from "./component/Input";

function App() {
  const input = useRef<HTMLInputElement>(null);
  return (
    <>
      <main>
        <Input label="What day is it?" id="inp1" ref={input}></Input>
      </main>
    </>
  )
}

export default App;
