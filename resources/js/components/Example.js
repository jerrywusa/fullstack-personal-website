import React from "react";
import ReactDOM from "react-dom";

import style from "../../sass/Example.module.scss";

function Example() {
    return <div className={style["container"]}>I'm an example component!</div>;
}

export default Example;

if (document.getElementById("example")) {
    ReactDOM.render(<Example />, document.getElementById("example"));
}
