import React from "react";
import "./style.css";

function Header(props) {
    return (
        <div className="jumbotron jumbotron-fluid" id="header">
            <div className="container">
                <h1 className="display-4 align-items-center">Employee Directory</h1>
                    <p className="lead align-items-center">
                        Click on carrots to filter by heading or use the search box to narrow your results.
                    </p>
            </div>
        </div>
    )
}

export default Header;