import React from 'react'


export const Submit = ({level, onClick, submitted}) => {


    return (
        level && !submitted?
        <button onClick={onClick}>Submit</button>
        :
        null
        )
    
}