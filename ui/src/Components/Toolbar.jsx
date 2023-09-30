import { ChevronLeft } from "../icons/ChevronLeft";
import { ChevronRight } from "../icons/ChevronRight";

const Toolbar = ({ name, handlePageChange, currentPage, dataLength, itemsPerPage }) => {
  const pages = dataLength / itemsPerPage;
  const firstPage = () => currentPage === 1;
  const lastPage = () => currentPage === pages;

  const disabledStyle = {
    color: "rgb(140, 140, 140)",
    cursor: "default",
  };
  const available = {
    color: "rgb(0, 255, 157)",
    cursor: "pointer",
  };

  return (
    <div className="toolbar">
      {name && <div>{name}</div>}
      <div>{dataLength} ACTIVE EVENTS</div>
      <div className="buttons">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          style={firstPage() ? disabledStyle : available}
          disabled={firstPage()}
        >
          <ChevronLeft />
        </button>
        <div className="pages">
          {currentPage} / {pages}
        </div>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          style={lastPage() ? disabledStyle : available}
          disabled={lastPage()}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
