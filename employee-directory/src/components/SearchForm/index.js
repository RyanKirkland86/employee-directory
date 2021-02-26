import React from "react";
import "./style.css";

function SearchForm(props) {
    return (
        <div className="row justify-content-center mb-5">
            <div className="input-group col-4 w-25 p-3" id="search">
                <input 
                    value={props.search}
                    onChange={props.handleInputChange}
                    type="text" 
                    class="form-control mx-auto text-center" 
                    placeholder="Search for an employee">
                </input>
            </div>
        </div>

    )
}

export default SearchForm;