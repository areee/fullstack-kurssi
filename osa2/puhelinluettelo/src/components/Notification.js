import React from 'react'

const Notification = ({ message }) => {
    if (message == null) {
        return null
    }

    const words = message.split('_')

    if (words[0].equals('INFO')) {
        return (
            <div className="info">
                {words[1]}
            </div>
        )
    }

    return (
        <div className="error">
            {words[1]}
        </div>
    )
}

export default Notification