import "./LifeCycle.css";
import React from "react";


class LifeCycle extends React.Component { 
  constructor(props){      // אתחול
    super(props);
    this.state = {data: "test"}
  }               
  componentWillMount(){           // לפני הרכבה
    this.setState({data: "hello"})
  }                 
  render() {       // הרכבה 
    return(
      <div>
        <h2>{this.state.data}</h2>
      </div>
    );
  }
                   
componentDidMount() {           // אחרי הרכבה
  setTimeout(() => {
    this.setState({data: "adfsdg"})
    console.log(this.state.data);
  }, 2000);
}
}
export default LifeCycle;