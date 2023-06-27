import classes from './Counter.module.css';
import {useDispatch, useSelector} from 'react-redux'


const Counter = () => {
  const counter =useSelector((state)=>state.counter)
  const Dispatch=useDispatch()
  const IncreamentHandler=()=>{
Dispatch({type:"Increament"})

  }
  const DecreamentHandler=()=>{
  Dispatch({type:"Decreamenr"})
  }
  

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={IncreamentHandler}>Increament</button>
      <button onClick={DecreamentHandler}>Decreament</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
