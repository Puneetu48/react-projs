// import type { ReactNode } from "react"
// import type { FC } from "react"
import type { PropsWithChildren } from "react"

// type CourseGoalProps = {
//     title: string,
//     children: ReactNode
// }

type CourseGoalProps = PropsWithChildren<{
    id: number;
    title: string;
    onDelete: (id: number) => void;
}>;

function CourseGoals({ title, id, children, onDelete }: CourseGoalProps) {
    return <article>
        <div>
            <h2>{title}</h2>
            {children}
        </div>
        <button onClick={() => onDelete(id)}>Delete</button>
    </article>
}

// const CourseGoals: FC<CourseGoalProps> = ({ title, children }) => {
//     return <article>
//         <div>
//             <h2>{title}</h2>
//             {children}
//         </div>
//         <button>Delete</button>
//     </article>
// }

export default CourseGoals