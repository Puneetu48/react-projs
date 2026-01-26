import CourseGoals from "./CourseGoals";
import {type CourseGoal as CGoal} from "../App.tsx";

type CourseGoalListProps = {
    goals: CGoal[]
    onDeleteGoal: (id: number) => void;
}

export default function CourseGoalList({ goals, onDeleteGoal }: CourseGoalListProps) {
    return (
        <ul>
            {goals.map((goal) => (
                <li key={goal.id}>
                    <CourseGoals id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
                        {goal.description}
                    </CourseGoals>
                </li>
            ))}
        </ul>
    )
}