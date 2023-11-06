import React from "react"
import ReactDOM from "react-dom"

const firstVar = React.createElement("div", { className: "design" }, "Hello Gautam to React")
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(firstVar)