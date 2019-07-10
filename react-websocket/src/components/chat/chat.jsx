import React, { Component } from 'react'
import Message from './message'
import io from 'socket.io-client'

export default class Chat extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            currentMessage: '',
            messages: []
        }
        this.socket = io('localhost:8080')
        this.socket.on('RECEIVE_MESSAGE', this.receiveMessage)
    }

    updateUsername = event => {
        this.setState({
            username: event.target.value
        })
    }

    updateMessage = event => {
        this.setState({
            currentMessage: event.target.value
        })
    }

    mapMessages = () => {
        return this.state.messages.map(message => <Message message={message} />)
    }

    sendMessage = event => {
        event.preventDefault()
        this.socket.emit('SEND_MESSAGE', {
            author: this.state.username,
            message: this.state.currentMessage
        })
        this.setState({
            currentMessage: ''
        })
    }

    receiveMessage = incommingMessage => {
        this.setState({ messages: [...this.state.messages, incommingMessage] })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title">Global Chat</div>
                                <hr />
                                <div className="messages">
                                    {this.mapMessages()}
                                </div>
                                <div className="footer">
                                    <input type="text"
                                        placeholder="Nombre de usuario"
                                        value={this.state.username}
                                        onChange={this.updateUsername}
                                        className="form-control" />
                                    <br />
                                    <input type="text"
                                        placeholder="Mensaje"
                                        className="form-control"
                                        value={this.state.currentMessage}
                                        onChange={this.updateMessage} />
                                    <br />
                                    <button className="btn btn-primary form-control"
                                        onClick={this.sendMessage}>Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}