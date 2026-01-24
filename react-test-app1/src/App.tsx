import { useState } from "react";
import "./App.css";
import goalsImg from "./assets/goals.jpg";
import CourseGoals from "./components/CourseGoals.tsx";
import Header from "./components/Header.tsx";

type CourseGoal = {
  title: string;
  description: string;
  id: number;
}

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal() {
    setGoals(prevGoals => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: 'Learn React with TS',
        description: 'Deep dive learning'
      };
      return [...prevGoals, newGoal]
    });
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoals title={goal.title}>
              {goal.description}
            </CourseGoals>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
