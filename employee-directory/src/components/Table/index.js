import React from "react";
import TableRow from "../TableRow";
import "./style.css";

function Table(props) {
    return(
        <table className="table display-4 align-items-center">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
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
  )
}

export default Table;