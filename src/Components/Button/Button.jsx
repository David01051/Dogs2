import './Button.css'
import { Component } from 'react'

class CustomButton extends Component {
    constructor(props) {
        super(props);
        this.state = { text: "click", counter: 0 };
        this.changeText = this.changeText.bind(this);
        this.counterUp = this.counterUp.bind(this);
    }
    changeText() {
        this.setState({ text: "OK" })
        if (this.state.text == "OK") {
            this.setState({ text: "click" })
        }
    }
    counterUp() {
        this.setState({ counter: this.state.counter + 1 });
    }
    render() {
        const { placeholder, counter, text } = this.state
        return (
            <div>
                <br/>
                <label>
                    <input placeholder={placeholder}></input>
                    <button onClick={this.counterUp}>{counter}</button>
                    <button onClick={this.changeText}>{text}</button>
                </label>
            </div>

        )
    }
};

export default CustomButton;