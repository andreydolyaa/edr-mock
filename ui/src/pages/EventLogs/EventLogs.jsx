import { useDispatch, useSelector } from "react-redux";
import { fetchEventLogs } from "../../redux/actions/logsActions";
import { useEffect } from "react";
import Log from "./_Log";

const EventLogs = () => {
  const dispatch = useDispatch();
  const logs = useSelector((state) => state.logs.items);

  useEffect(() => {
    dispatch(fetchEventLogs());
  }, [dispatch]);

  return (
    <div className="logs">
      {logs.map((x) => {
        return <Log key={x._id} log={x} />;
      })}
    </div>
  );
};

export default EventLogs;
