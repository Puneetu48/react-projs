import Container from "./UI/Container";
import { type Timer as TimerProps } from "../store/timers-context";

// type TimerProps = {
//   name: string;
//   duration: number;
// };

export default function Time1r({ name, duration }: TimerProps) {
  return (
    <Container as='article'>
      <h2>{name}</h2>
      <p>{duration}</p>
    </Container>
  );
}
