import React from 'react'

export const ThankYou = ({submitted, level}) => {

    return (
        submitted ?
        <h2>Thank you for your submission! You are feeling like a {level} today. See you tomorrow!</h2>
        :
        null
    )
}