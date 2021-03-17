import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import Table from "./components/Table";
// import TableRow from "./components/TableRow";
import Wrapper from "./components/Wrapper";
import API from "./utils/API";

function App() {

  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    renderEmployees();
  }, []);

  useEffect(() => {
    if (search === "") {
      setEmployees(employees)
      return;
    }
    let employeeSearch = [];
    for (let i = 0; i < employees.length; i++) {
      if (employees[i].name.toLowerCase().includes(search.toLowerCase())) {
        employeeSearch.push(employees[i]);
      };
    };
    setEmployees(employeeSearch);
  }, [search]);

  const renderEmployees = () => {
    API.getEmployees()
    .then((employees) => {
      setEmployees(employees);
    }).catch(err => console.log(err))
  };

  const handleInputChange = event => {
    setSearch(event.target.value);
  };

    return (
      <Wrapper>
        <Header />
          <SearchForm
            handleInputChange={handleInputChange}
            results={search} 
          />
          <Table
            employees={employees}
            search={search}
          />
      </Wrapper>
    )
}

export default App;
