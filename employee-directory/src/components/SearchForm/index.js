import React from "react";
import "./style.css";

function SearchForm(props) {
    return (
        <div className="row justify-content-center mb-5">
            <div className="input-group col-4 w-30 p-3" id="search">
                <input 
                    className="form-control mx-auto text-center" 
                    value={props.searchEmployee}
                    onChange={props.handleInputChange}
                    type="search"
                    placeholder="Search for an employee">
                </input>
            </div>
        </div>

    )
}

export default SearchForm;