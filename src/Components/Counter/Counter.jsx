import './Counter.css'
import { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { number: props.number};
        this.numberUp = this.numberUp.bind(this);
        this.numberDown = this.numberDown.bind(this);
    }
    changeNum(e){
        if (e.target.innerText == "+"){
            this.setState({number: this.state.number + 1 })
        }
        else{
            this.setState({number: this.state.number - 1 })
        }
    }
    numberUp() {
        this.setState({ number: this.state.number + 1 })
    }
    numberDown() {
        this.setState({ number: this.state.number - 1 })
    }
    printEvent(event) {
        const btnInnerText = event.target.innerText;
        btnInnerText == "+" ? this.numberUp() : this.numberDown()
    }
    render() {
        const { number } = this.state
        return (
            <div>
                <br/>
                <input type="number" placeholder = {this.state.number}/>
                <button onClick={this.numberUp}>+</button>
                <button onClick={this.numberDown}>-</button>
                <button onClick={this.changeNum}>Print Event</button>
            </div>
        );
    }
}

export default Counter;