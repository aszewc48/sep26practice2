import React from 'react'

const Greeting = (props) => {

    const message = 'Hello ana'
    console.log(props)
    return (
        <div>
            <u>Hello {props.firstName}</u>
            <p>How's the weather in {props.location.city}, {props.location.state}</p>
            <p>{props.lastName='Habinger' ? `hey ${props.lastName}` : 'hey anonymous'}</p>
        </div>
    )
}

export default Greeting