import useRobots from "../../hooks/useRobots";
import Robot from "../robot/Robot";

const RobotList = () => {
  const { robots } = useRobots();

  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <ul>
            {robots.map((robot) => (
              <li key={robot._id}>
                <Robot
                  name={robot.name}
                  speed={robot.features.speed}
                  stamina={robot.features.stamina}
                  creationDate={robot.features.creationDate}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RobotList;
