import { useEffect } from "react";
import "./App.css";
// import Robot from "./components/robot/Robot";
import RobotList from "./components/RobotList/RobotList";
import useRobots from "./hooks/useRobots";
// import FormUpdate from "./components/forms/formUpdate/FormUpdate";
// import FormCreate from "./components/forms/formCreate/FormCreate";

function App() {
  const { loadRobots } = useRobots();
  useEffect(() => {
    loadRobots();
  }, [loadRobots]);

  return (
    <div className="App">
      <RobotList />
    </div>
  );
}

export default App;
