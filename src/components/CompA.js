import React,{useContext} from 'react'
import { CountContext } from '../App'
import CompA1 from './CompA1'

const CompA =()=>{
    const CountContextN= useContext(CountContext)
return(<div>
    <CompA1/>
    CompA 
    <button onClick={() =>CountContextN.Dispatch('increment')}> Increment</button>
    <button onClick={() =>CountContextN.Dispatch('decrement')}>Decrement</button>
    <button onClick={() =>CountContextN.Dispatch('reset')}> Reset</button>
    </div>
)
}

export default CompA