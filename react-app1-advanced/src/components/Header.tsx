import Button from "./UI/Button";
import { useTimersContext } from "../store/timers-context.tsx";

export default function Header() {
  const timersCtx = useTimersContext();
  return (
    <header>
      <h1>ReactTimer</h1>

      <Button
        el="button"
        onClick={
          timersCtx.isRunning ? timersCtx.stopTimers : timersCtx.startTimers
        }
      >
        {timersCtx.isRunning ? "Stop" : "Start"}
      </Button>
    </header>
  );
}
