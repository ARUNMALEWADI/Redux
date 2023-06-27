import classes from './Counter.module.css';
import {useDispatch, useSelector} from 'react-redux'


const Counter = () => {
  const counter =useSelector((state)=>state.counter)
  const Dispatch=useDispatch()
  const IncreamentHandler=()=>{
Dispatch({type:"Increament"})

  }
  const DecreamentHandler=()=>{
  Dispatch({type:"Decreament"})
  }
  const IncreaseHandler=()=>{
    Dispatch({type:"Increase",amount:5})
  }
  

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={IncreamentHandler}>Increament</button>
      <button onClick={IncreaseHandler}>Increament by 5</button>
      <button onClick={DecreamentHandler}>Decreament</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
