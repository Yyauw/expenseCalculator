const ExpenseForm = () => {
  return (
    <form action="" className="mb-3">
        <h2 className="ps-3 mb-0">Add New Expense</h2>
      <div className="p-3">
        <label htmlFor="" className="form-label">
          Title
        </label>
        <input type="text" className="form-control" />
      </div>
      <div className="row p-3 mb-3">
        <div className="col-md-3">
          <label htmlFor="" className="form-label">
            Amount
          </label>
          <input type="number" className="form-control" />
        </div>
        <div className="offset-md-1 col-md-3">
          <label htmlFor="" className="form-label">
            Date
          </label>
          <input type="date" className="form-control" />
        </div>
        <div className="offset-md-1 col-md-3">
          <label htmlFor="" className="form-label">
            Category
          </label>
          <select name="" id="" className="form-select">
            <option value="">General Expenses</option>
            <option value="">Services</option>
            <option value="">Food</option>
          </select>
        </div>
      </div>
      <span className="p-3 mb-3">
        <button className="btn btn-success">Add Expense</button>
        <button className="btn btn-danger ms-1">Cancel</button>
      </span>
    </form>
  );
};

export default ExpenseForm;
