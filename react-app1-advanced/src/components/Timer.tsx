import Container from "./UI/Container";
import {
  useTimersContext,
  type Timer as TimerProps,
} from "../store/timers-context";
import { useEffect, useRef, useState } from "react";

export default function Time1r({ name, duration }: TimerProps) {
  const interval = useRef<number | null>(null);
  const [remainingTime, setRemainingTime] = useState(duration * 1000);

  const { isRunning } = useTimersContext();

  useEffect(() => {
    if (remainingTime <= 0 && interval.current) {
      clearInterval(interval.current);
    }
    let timer: number;

    if (isRunning) {
      timer = interval.current = setInterval(() => {
        setRemainingTime((prevTime) => {
          if (prevTime <= 0) {
            return prevTime;
          }
          return prevTime - 50;
        });
      }, 50);
      interval.current = timer;
    } else if (interval.current) {
      clearInterval(interval.current);
    }

    return () => clearInterval(timer);
  }, [isRunning, remainingTime]);

  const formatterRemainingTime = (remainingTime / 1000).toFixed(2);

  return (
    <Container as='article'>
      <h2>{name}</h2>
      <p>
        <progress max={duration * 1000} value={remainingTime}></progress>
      </p>
      <p>{formatterRemainingTime}</p>
    </Container>
  );
}
