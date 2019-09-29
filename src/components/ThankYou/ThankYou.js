import React from 'react'
import { Links } from '../Links/Links';

export const ThankYou = ({submitted, level}) => {

    return (
        submitted ?
            level <= 5 ?
            <h2>Thank you for your submission! You are feeling like a {level} today. See you tomorrow!</h2>
            :
            <Links level={level} />
        :
        null
    )
}