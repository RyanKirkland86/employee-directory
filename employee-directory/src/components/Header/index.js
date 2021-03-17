import React from "react";
import "./style.css";

function Header() {
    return (
        <div className="jumbotron jumbotron-fluid" id="header">
            <div className="container">
                <h1 className="display-4 align-items-center">Employee Directory</h1>
                    <p className="lead align-items-center">
                        Click on the carrot to filter by name or use the search box to narrow your results.
                    </p>
            </div>
        </div>
    )
}

export default Header;