const ExpenseForm = (props) => {
  //get form data on submit
  const getFormData = (event) => {
    event.preventDefault();
    //console.log(event)
    const data = {
      title: event.target[0].value,
      amount: event.target[1].value,
      date: new Date(event.target[2].value),
      category: event.target[3].value,
    };
    props.closeForm();
    alert("Expense added!");
    props.dataToNewExpense(data);
    //for(let x =0; x < 2; x ++) event.target[x].value = '';
    console.log(data);
  };

  return (
    <form action="" className="mb-3" onSubmit={getFormData}>
      <h2 className="ps-3 mb-0">Add New Expense</h2>
      <div className="p-3">
        <label htmlFor="" className="form-label">
          Title
        </label>
        <input type="text" className="form-control" required />
      </div>
      <div className="row p-3 mb-3">
        <div className="col-md-3">
          <label htmlFor="" className="form-label">
            Amount
          </label>
          <input type="number" className="form-control" required min={0} />
        </div>
        <div className="offset-md-1 col-md-3">
          <label htmlFor="" className="form-label">
            Date
          </label>
          <input type="date" className="form-control" required />
        </div>
        <div className="offset-md-1 col-md-3">
          <label htmlFor="" className="form-label">
            Category
          </label>
          <select name="" id="" className="form-select">
            <option value="general expenses">General Expenses</option>
            <option value="services">Services</option>
            <option value="food">Food</option>
          </select>
        </div>
      </div>
      <span className="p-3 mb-3">
        <button className="btn btn-success">Add Expense</button>
        <button className="btn btn-danger ms-1" onClick={props.closeForm}>
          Cancel
        </button>
      </span>
    </form>
  );
};

export default ExpenseForm;
