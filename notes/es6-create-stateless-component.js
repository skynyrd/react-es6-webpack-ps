//EVERYWHERE ELSE STATE, REFS, LIFECYCLE METHODS, CHILD FUNCTIONS(For performance)

import * as React from "react";

const StatelessComponent = (props) => {
  const sayHi = (event) => {
    alert(`Hi ${props.name}`);
  };

  return(<div>
    <a href="#" onClick={sayHi}>Say Hi</a>
  </div>);
};

StatelessComponent.propTypes = {
  name: React.PropTypes.string.isRequired
};
