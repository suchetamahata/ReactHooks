import React,{useContext} from 'react'
import { CountContext } from '../App'

const CompC =()=>{
    const CountContextN= useContext(CountContext)
return(<div>
    <hr></hr>
    CompC 
    <button onClick={() =>CountContextN.Dispatch('increment')}> Increment</button>
    <button onClick={() =>CountContextN.Dispatch('decrement')}>Decrement</button>
    <button onClick={() =>CountContextN.Dispatch('reset')}> Reset</button>
    </div>
)
}

export default CompC