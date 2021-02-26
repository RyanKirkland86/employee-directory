import React from "react";
import TableRow from "../TableRow";
import "./style.css";

function Table({ image, name, phone, email, dob }) {
    return(
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">D.O.B.</th>
                </tr>
            </thead>
            <TableRow 
                image={image} 
                name={name} 
                phone={phone} 
                email={email} 
                dob={dob}
            />
        </table>
  )
}

export default Table;