import './App.css'
import goalsImg from './assets/goals.jpg';
import CourseGoals from './components/CourseGoals.tsx';
import Header from './components/Header.tsx';

function App() {

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <CourseGoals
        title="Learn React with TS">
        <p> Refresh your react knowledge with TS</p>
      </CourseGoals>
    </main>
  )
}

export default App
