//STATE, REFS, LIFECYCLE METHODS, CHILD FUNCTIONS(For performance)

import * as React from "react";

class ComponentES6 extends React.Component{
  constructor(props){
    super(props);
  }

  sayHi(event){
    alert(`Hi ${this.props.name}`)
  }

  render(){
    return(<div>
      <a href="#" onClick={this.sayHi.bind(this)}>Say Hi</a>
    </div>);
  }
}

ComponentES6.propTypes = {
  name: React.PropTypes.string.isRequired
};
