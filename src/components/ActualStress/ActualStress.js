import React from 'react'

export const ActualStress = ({level}) => {
    return(
        level ? 
        <h1>I am feeling like a {level} today!</h1>
        :
        <h1>Please make a selection!</h1>
    ) 

}