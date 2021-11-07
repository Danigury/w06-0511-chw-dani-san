import { useEffect } from "react";
import "./App.css";

import RobotList from "./components/RobotList/robotList";
import useRobots from "./hooks/useRobots";

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
