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
  const [filterEmps, setFilterEmps] = useState([]);

  // useEffect(() => {
  //   if (search === "") {
  //     setEmployees(employees)
  //     return;
  //   }
  //   let employeeSearch = [];
  //   for (let i = 0; i < employees.length; i++) {
  //     if (employees[i].name.toLowerCase().includes(search.toLowerCase())) {
  //       employeeSearch.push(employees[i]);
  //     };
  //   };
  //   renderEmployees(employeeSearch);
  // }, [search]);
  useEffect(() => {
    renderEmployees();
  }, []);

  // useEffect(() => {
  //   if (search) {
  //     loadByName();
  //   }
  // }, [search]);

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
            value={search} 
          />
          <Table
            employees={employees}
            search={search}
          />
      </Wrapper>
    )
}

export default App;
