// components/About.js

import React from "react";
import Experience from "./Experience";
import Education from "./Education";

const about = props => {
    console.log({ props });

    const displayName = () => {
        return props.match.params.blah ? (
            <h3>{props.match.params.blah}</h3>
        ) : (
            <h3>No Name</h3>
        );
    };

    return (
        <div>
            {displayName()}
            <hr />
            <div style={{ width: "40%", float: "left" }}>
                <Education />
            </div>
            <div style={{ width: "60%", float: "right" }}>
                <Experience />
            </div>
        </div>
    );
};

export default about;
