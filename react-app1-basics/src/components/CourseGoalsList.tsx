import CourseGoals from "./CourseGoals";
import { type CourseGoal as CGoal } from "../App.tsx";
import InfoBox from "./InfoBox.tsx";
import type { ReactNode } from "react";

type CourseGoalListProps = {
    goals: CGoal[]
    onDeleteGoal: (id: number) => void;
}

export default function CourseGoalList({
    goals,
    onDeleteGoal
}: CourseGoalListProps) {
    if (goals.length === 0) {
        return <InfoBox mode="hint">You have no course goals yet. Start adding some!</InfoBox>
    }
    let warningBox: ReactNode;
    if (goals.length >= 4) {
        warningBox = <InfoBox severity="medium" mode="warning">You are adding too many goals. Don't add so much bro. Chill!</InfoBox>
    }
    return (
        <>
            {warningBox}
            <ul>
                {goals.map((goal) => (
                    <li key={goal.id}>
                        <CourseGoals id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
                            {goal.description}
                        </CourseGoals>
                    </li>
                ))}
            </ul>
        </>
    )
}