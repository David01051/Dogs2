import "./UserForm.css";
import { React, Component } from "react";

export default class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
    this.submitBtm = this.submitBtm.bind(this);
    this.restorBtm = this.restorBtm.bind(this);
    this.cleanBtm = this.cleanBtm.bind(this);
    this.changeHandel = this.changeHandel.bind(this);
  }
  componentWillMount() {
    const { firstName, lastName, phoneNum, age } = this.props.userDetails
    this.state = {
      fName: firstName, lName: lastName,
      phone: phoneNum, age: age, email: "", shirtSize: ""
    
    }

  }
  componentWillUpdate() {
    
  }
  submitBtm() {
    console.log(this.state)
  }
  restorBtm() {
    console.log(this.state.props.user)
  }
  cleanBtm() {
  this.setState({fName : ''})
  }
  changeHandel(e) {
    this.setState({user : e.target.value})
  }

  render() {
    const { fName, lName, phone, age, email, shirtSize } = this.state
    return (
      <form className="formUser">

        <label htmlFor="First Name">First Name:
            <input type="text" name="fName"
            value={fName} onChange={this.changeHandel} />
        </label>

        <label htmlFor="Last Name">Last Name:
            <input type="text" name="lName"
            value={lName} onChange={this.changeHandel} />
        </label>

        <label htmlFor="Phone">Phone:
            <input type="text" name="phone"
            value={phone} onChange={this.changeHandel} />
        </label>

        <label htmlFor="Age">Age:
            <input type="number" name="age"
            value={age} onChange={this.changeHandel} />
        </label>

        <label htmlFor="Email">Email:
            <input type="email" name="email"
            value={email} onChange={this.changeHandel} />
        </label>

        <label htmlFor="Shirt Size">Shirt Size:
           <select name="shirtSize" id=""
            value={shirtSize} onChange={this.changeHandel}>
            <option value=""></option>
            <option value="">S</option>
            <option value="">M</option>
            <option value="">L</option>
            <option value="">XL</option>
          </select>
        </label>
        <div>
          <button onClick={this.submitBtm}>Sumbmit</button>
          <button onClick={this.restorBtm}>Restor</button>
          <button onClick={this.cleanBtm}>Clean</button>
        </div>
      </form>
    );
  }
  componentDidMount() { }

  componentDidUpdate() { }
}

