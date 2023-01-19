import ExpenseCategory from "./ExpenseCategory";

const Expense = (props) => {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="row">
        <ExpenseCategory category={props.expenseData.category} />
        <div className="card-body col-2 p-3">
          <h5 className="card-title">{props.expenseData.title}</h5>
          <p className="card-text text-muted">
            <small>{props.expenseData.date.toDateString()}</small>
          </p>
        </div>
        <div className="col-3 m-4 d-flex">
        <h4 className="card-title m-auto">${props.expenseData.amount}</h4>
        <button className="btn btn-primary d-row ">Edit</button>
        <button className="btn btn-danger d-row ms-2">Delete</button>
        </div>
      </div>
    </div>
  );
};
export default Expense;
