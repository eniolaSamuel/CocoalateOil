import JavascriptIcon from '../../assets/svg/icons8-javascript.svg';
import React from "react";
import ARView from "./ARView";

function Technologies() {
    return (
        <div>
            <h1>My AR App</h1>
            <ARView imageval={JavascriptIcon} />
        </div>
    );
}

export default Technologies;