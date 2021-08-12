import React, {useReducer} from 'react'
import './App.css';
import CompA from './components/CompA';
import CompB from './components/CompB';
import CompC from './components/CompC';

export const CountContext = React.createContext()

const initialCount= 1

const reducer=(state,action)=>{
  switch(action){
    case 'increment':
      return state +1 
    case 'decrement':
      return state -1
    case 'reset':
      return initialCount
    default:
      return state
  }
}

function App() {
  const [Newcount,dispatch]= useReducer(reducer, initialCount)
  return (
  <>
    <CountContext.Provider value={{countVal:Newcount, Dispatch:dispatch}}>
    <div className="App">
      <h1>Count- {Newcount}</h1>
      <CompA/>
      <CompB/>
      <CompC/>
    </div>
    </CountContext.Provider>
  </>
  );
}

export default App;
