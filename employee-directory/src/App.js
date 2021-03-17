import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import Table from "./components/Table";
import Wrapper from "./components/Wrapper";
import API from "./utils/API";

function App() {

  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [carrot, setCarrot] = useState("");

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

  useEffect(() => {
    if (sort === "") {
      setCarrot('\u25BA')
    }
    if (sort === "asc") {
      employees.sort((name1, name2) => {
        let emp1 = name1.name.toLowerCase();
        let emp2 = name2.name.toLowerCase();
        if (emp1 < emp2) {
          setCarrot('\u25BC')
          return -1;
        }
        return 0;
      })
    }
    if (sort === "desc") {
      employees.sort((name1, name2) => {
        let emp1 = name1.name.toLowerCase();
        let emp2 = name2.name.toLowerCase();
        if (emp1 > emp2) {
          setCarrot('\u25B2')
          return -1;
        }
        return 0;
      })
    }
  }, [sort, employees])

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
            carrot={carrot}
            sort={sort}
            setSort={setSort}
            employees={employees}
            search={search}
          />
      </Wrapper>
    )
}

export default App;
