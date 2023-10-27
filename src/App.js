function App() {
  return (
    <div className="App container">
      <h1>Employee Information</h1>
      <div className="information">
        <form action="">
          {/* Name */}
          <div className="mb-3"> 
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
              >
            </input>
          </div>
          {/* Age */}
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age:
            </label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter age"
              >
            </input>
          </div>
          {/* Country */}
          <div className="mb-3">
            <label htmlFor="country" className="form-label">
            Country:
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Country"
              >
            </input>
          </div>
          {/* Position */}
          <div className="mb-3">
            <label htmlFor="position" className="form-label">
              Position:
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter position"
              >
            </input>
          </div>
          {/* Wage */}
          <div className="mb-3">
            <label htmlFor="wage" className="form-label">
              Wage:
            </label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter wage"
              >
            </input>
          </div>
          <button className="btn btn-success">Add Employee</button>
        </form>
      </div>
      <hr/>
      <div className="emplyees">
        <button className="btn btn-primary">Show employee</button>
      </div>
    </div>
  );
}

export default App;
