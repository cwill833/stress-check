import React from 'react'

export const ActualStress = ({level, submitted}) => {
    return(
        submitted ?
        null
        :
            level ? 
            <h1> Are you sure you are feeling like a {level} today?</h1>
            :
            <h1>Please make a selection!</h1>
    ) 

}