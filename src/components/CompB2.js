import React,{useContext} from 'react'
import { CountContext } from '../App'

const CompB2 =()=>{
    const CountContextN= useContext(CountContext)
return(<div>
    CompB2
    <button onClick={() =>CountContextN.Dispatch('increment')}> Increment</button>
    <button onClick={() =>CountContextN.Dispatch('decrement')}>Decrement</button>
    <button onClick={() =>CountContextN.Dispatch('reset')}> Reset</button>
    </div>
)
}

export default CompB2