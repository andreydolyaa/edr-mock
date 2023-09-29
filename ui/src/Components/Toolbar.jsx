const Toolbar = ({ name, handlePageChange, currentPage, dataLength, itemsPerPage }) => {
  const firstPage = () => currentPage === 1;
  const lastPage = () => dataLength < itemsPerPage;

  return (
    <div className="toolbar">
      <div>{name}</div>
      <div>
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={(firstPage())}>Previous Page</button>
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={lastPage()}>Next Page</button>
      </div>
    </div>
  );
};

export default Toolbar;
