import "./App.css";
import CarSelection from "./components/CarSelection";
import Timer from "./components/Timer";
import ClockHook from "./hook/useClock";
import AppRouter from "./routes/AppRouter";
import { BrowserRouter, Link } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
     
        <ol clas>
          <li>
            <Link to="/">CarSelection</Link>
          </li>
          <li>
            <Link to="/timer">Timer Countdown</Link>
          </li>
          <li>
            <Link to="/clock">Clock</Link>
          </li>
        </ol>

        <AppRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
