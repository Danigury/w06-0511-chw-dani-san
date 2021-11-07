import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import loadRobotsThunk from "../redux/thunk/robotsThunk";

const useRobots = () => {
  const robots = useSelector(({ robots }) => robots);
  const dispatch = useDispatch();

  const loadRobots = useCallback(() => {
    dispatch(loadRobotsThunk());
  }, [dispatch]);

  return { robots, dispatch, loadRobots };
};

export default useRobots;
