import React from "react";
import TableRow from "../TableRow";
import "./style.css";

function Table(props) {

    const handleClickSort = event => {
        event.preventDefault();
        if (props.sort === "" || "desc") {
          props.setSort("asc");
        }
        if (props.sort === "asc") {
          props.setSort("desc")
        }
      }

    return(
        <div className="table-responsive">
        <table className="table align-items-center table-striped">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col sort" onClick={e => handleClickSort(e)}>Name <span>{props.carrot}</span></th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">D.O.B.</th>
                </tr>
            </thead>
            {props.employees.map(employee => (
            <TableRow 
                image={employee.image} 
                name={employee.name} 
                phone={employee.phone} 
                email={employee.email} 
                dob={employee.dob}
            />
            ))}
        </table>
        </div>
  )
}

export default Table;