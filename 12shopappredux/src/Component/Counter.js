import React from 'react'
import { increment,decrement } from '../redux/Slices/CounterSlices';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
const Counter = () => {

    const { value } = useSelector((state) => state.counter);
//to cAll the reducerfunction we have to use the usedespatchhook
const dispatch=useDispatch();
  return (
    <div>
      <button onClick={()=>dispatch(increment())}>
        Increment
      </button>
      <br/>
      <br/>
      <div>{value }</div>
      <br/>
      <br/>
<button onClick={()=>dispatch(decrement())}>
    Decrement
</button>

    </div>
  )
}

export default Counter
