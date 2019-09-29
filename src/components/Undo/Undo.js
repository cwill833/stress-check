import React from 'react'

export const Undo = ({onClick, level}) => {

    return (
        level ? 
        <button onClick={onClick}>Was that not correct?</button>
        :
        null
        )
}