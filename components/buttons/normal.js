import React from "react";

const NormalButton = (props) => {
    return (
        <button className={props.classes}>{props.data}</button>
    );
};

export default NormalButton;