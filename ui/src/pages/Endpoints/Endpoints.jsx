import { useDispatch, useSelector } from "react-redux";
import { fetchEndpoints, updateCurrentPage } from "../../redux/actions/endpointsActions";
import { fetchModelCount } from "../../services/counts";
import { useEffect, useState } from "react";
import Endpoint from "./Endpoint";
import Toolbar from "../../components/Toolbar";

const EventLogs = () => {
  const dispatch = useDispatch();
  const endpoints = useSelector((state) => state.logs.items);
  const loading = useSelector((state) => state.logs.loading);
  const error = useSelector((state) => state.logs.error);
  const currentPage = useSelector((state) => state.logs.currentPage);
  const itemsPerPage = useSelector((state) => state.logs.itemsPerPage);
  const [modelCount, setModelCount] = useState(null);
  const MODEL = "Endpoint";

  useEffect(() => {
    dispatch(fetchEndpoints(currentPage, itemsPerPage));
    fetchModelCount(MODEL).then((count) => {
      setModelCount(count[MODEL]);
    });
  }, [dispatch, currentPage, itemsPerPage]);

  const handlePageChange = (newPage) => {
    dispatch(updateCurrentPage(newPage));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error occured</div>;

  return (
    <div className="endpoints container-fluid">
      <Toolbar
        handlePageChange={handlePageChange}
        currentPage={currentPage}
        dataLength={modelCount}
        itemsPerPage={itemsPerPage}
      />

      <div className="row">
        <div className="endpoints-list col col-lg-9">
          {endpoints.map((x) => {
            return <Endpoint key={x._id} endpoint={x} />;
          })}
        </div>
        <div className="info col col-lg-3">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
        </div>
      </div>
    </div>
  );
};

export default EventLogs;
