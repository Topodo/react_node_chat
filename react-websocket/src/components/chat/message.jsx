import React from 'react'

const Message = (props) => {
    return <div> <strong>{props.message.author}:</strong> {props.message.message}</div>
}

export default Message