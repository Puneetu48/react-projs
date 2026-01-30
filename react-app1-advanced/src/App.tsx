import Header from "./components/Header";
import AddTimer from "./components/AddTimer";
import Timers from "./components/Timers";
import TimerContextProvider from "./store/timers-context";

function App() {
  return (
    <>
      <TimerContextProvider>
        <Header />
        <main>
          <AddTimer />
          <Timers />
        </main>
      </TimerContextProvider>
    </>
  );
}

export default App;
