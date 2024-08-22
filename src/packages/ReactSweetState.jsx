import React from 'react'
import { createHook, createStore } from 'react-sweet-state';

function ReactSweetState() {
    const Store = createStore({
        initialState: {
          count: 0,
        },
        actions: {
          isZero: () => ({setState, getState}) =>{
            return console.log(getState().count === 0)
          },
          increment: (value = 1) => ({getState,setState}) => {
            const {count} = getState()
            setState({count: count+ value})
          },
          setToZero: () => ({getState, setState}) => {
            const {count} = getState()
            setState({count:0})
          }
        }
      })
    
        const useStore = createHook(Store)
    
        const [state, actions] = useStore();

  return (
    <div>
        {state.count}
      <button onClick={() => actions.isZero()}>Check</button>
      <button onClick={() => actions.increment()}>Add 1</button>
      <button onClick={() => actions.increment(2)}>Add 2</button>
      <button onClick={()=> actions.setToZero()}>Reset</button>
    </div>
  )
}

export default ReactSweetState