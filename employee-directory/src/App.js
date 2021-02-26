import React, { Component } from "react";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import Table from "./components/Table";
import TableRow from "./components/TableRow";
import Wrapper from "./components/Wrapper";
import API from "./utils/API";

class App extends Component {

  render() {
    return (
      <Wrapper>
        <Header />
          <SearchForm
            // handleInputChange={handleInputChange}
            // results={search} 
          />
          <Table>
            
          </Table>
      </Wrapper>
    )
  }
}

export default App;
