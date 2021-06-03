import React    from "react";
import template from "./LifeCycle.jsx";

class LifeCycle extends React.Component {
  render() {
    return template.call(this);
  }
}

export default LifeCycle;
