import { Actions } from "./Actions";
import { Table } from "./Table";
import { Info } from "./Info";

const Details = ({ endpoint }) => {
  return (
    <div className="endpoint-details">
      <div className="details-container container-fluid">
        <Info endpoint={endpoint} />
        <Actions />
      </div>
      <Table />
    </div>
  );
};

export default Details;
