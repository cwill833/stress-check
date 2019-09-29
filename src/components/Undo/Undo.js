import React from 'react'

export const Undo = ({onClick, level, submitted}) => {

    return (
        level && !submitted? 
        <button onClick={onClick}>Was that not correct?</button>
        :
        null
        )
}