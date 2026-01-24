// import type { ReactNode } from "react"
// import type { FC } from "react"
import type { PropsWithChildren } from "react"

// type CourseGoalProps = {
//     title: string,
//     children: ReactNode
// }

type CourseGoalProps = PropsWithChildren<{ title: string }>;

function CourseGoals({ title, children }: CourseGoalProps) {
    return <article>
        <div>
            <h2>{title}</h2>
            {children}
        </div>
        <button>Delete</button>
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