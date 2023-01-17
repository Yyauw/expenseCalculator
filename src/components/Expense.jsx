const Expense = () => {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="row">
        <span className="input-group-text mx-3 my-2 col-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="bi bi-basket-fill m-auto"
            viewBox="0 0 16 16"
          >
            <path d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717L5.07 1.243zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3z" />
          </svg>
        </span>
        <div className="card-body col-2 p-3">
          <h5 className="card-title">Books</h5>
          <p className="card-text text-muted">
            <small>3 feb. 2023</small>
          </p>
        </div>
        <div className="col-3 m-4 d-flex">
        <h4 className="card-title m-auto">$69.99</h4>
        <button className="btn btn-primary d-row ">Edit</button>
        <button className="btn btn-danger d-row ms-2">Delete</button>
        </div>
      </div>
    </div>
  );
};
export default Expense;
