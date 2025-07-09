import "./App.css";
import CarSelection from "./components/CarSelection";
import Timer from "./components/Timer";
import ClockHook from "./hook/ClockHook";
import AppRouter from "./routes/AppRouter";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <CarSelection />
          <Timer />
          <ClockHook />
        </div>

        <AppRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
