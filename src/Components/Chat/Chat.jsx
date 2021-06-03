import React, { Component } from 'react'

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = { numMessage: 0, Message: false }

    }
    componentWillMount() {
        this.setState({ numMessage: this.props.numOf, Message: this.props.messg })
    }
    render() {
        const { numMessage, Message } = this.state
        return (
            <div>
                <h1>{numMessage}</h1>
                <span>{Message ? "True" : "false"}</span>
            </div>
        )
    }
    componentDidMount() {
        setTimeout(() => {
            alert(`You heve ${this.state.numMessage} new message `)
        }, 3000);
    }
}
export default Chat;