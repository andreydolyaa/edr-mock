import { useDispatch, useSelector } from "react-redux";
import { fetchEventLogs, updateCurrentPage } from "../../redux/actions/logsActions";
import { useEffect } from "react";
import Log from "./_Log";
import Toolbar from "../../components/Toolbar";

const EventLogs = () => {
  const dispatch = useDispatch();
  const logs = useSelector((state) => state.logs.items);
  const loading = useSelector((state) => state.logs.loading);
  const error = useSelector((state) => state.logs.error);
  const currentPage = useSelector((state) => state.logs.currentPage);
  const itemsPerPage = useSelector((state) => state.logs.itemsPerPage);

  useEffect(() => {
    dispatch(fetchEventLogs(currentPage, itemsPerPage));
  }, [dispatch, currentPage, itemsPerPage]);

  const handlePageChange = (newPage) => {
    dispatch(updateCurrentPage(newPage));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error occured</div>;

  return (
    <div className="logs">
      <Toolbar
        name={"Event Type:"}
        handlePageChange={handlePageChange}
        currentPage={currentPage}
        dataLength={logs.length}
        itemsPerPage={itemsPerPage}
      />
      {logs.map((x) => {
        return <Log key={x._id} log={x} />;
      })}
    </div>
  );
};

export default EventLogs;
