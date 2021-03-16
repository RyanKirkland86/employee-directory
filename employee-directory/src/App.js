import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import Table from "./components/Table";
// import TableRow from "./components/TableRow";
import Wrapper from "./components/Wrapper";
import API from "./utils/API";

function App() {

  const [employees, setEmployees] = useState([]);
  const [searchEmployee, setSearch] = useState("");

  useEffect(() => {
    renderEmployees();
  }, []);

  let renderEmployees = event => {
    API.getEmployees()
    .then((results) => {
      setEmployees(results)
    }).catch(err => console.log(err))
  };



  let handleInputChange = event => {
    setSearch(event.target.value.toLowerCase());
  };

    return (
      <Wrapper>
        <Header />
          <SearchForm
            handleInputChange={handleInputChange}
            value={searchEmployee} 
          />
          <Table
            employees={employees}
            search={searchEmployee}
          />
      </Wrapper>
    )
}

export default App;
