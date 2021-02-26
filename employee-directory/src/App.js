import React, { Component } from "react";
import Header from "./components/Header";
import Table from "./components/Table";
import TableRow from "./components/TableRow";
import API from "./utils/API";

class App extends Component {

  render() {
    return (
      <div>
        <Header>
          <Table>

          </Table>
        </Header>
      </div>
    )
  }
}

export default App;
