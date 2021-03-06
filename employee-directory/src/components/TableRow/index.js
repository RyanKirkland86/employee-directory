import React from "react";
import "./style.css";

function TableRow({ image, name, phone, email, dob }) {
    return(
        <tbody>
            <tr>
                {/* <th scope="row">{image}</th> */}
                <td>
                    <img className="employee-image" alt={name} src={image} />
                </td>
                <td>{name}</td>
                <td>{phone}</td>
                <td>{email}</td>
                <td>{dob}</td>
            </tr>
        </tbody>
    )
}

export default TableRow;