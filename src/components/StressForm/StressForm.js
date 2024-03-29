import React from 'react'

 export const StressForm = ({onChange, level}) =>{

    
    const fix = event => onChange(event)
    
    return (
        level ?
        null 
        :
        <form onChange={fix}>
            <select>
                <option value={0}>0</option>
                <option value={1}>1(no stress)</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5(I'm ok but feeling it)</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10(so stressed I can't function)</option>
            </select>
        </form>
    )
}