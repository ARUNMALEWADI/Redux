import {createStore} from 'react-redux'
const reducer=(state={counter:0},action)=>{
if(action.type==="Increament")
{   return {counter:state.counter+2}

}
if(action.type==="Decreament")
{ return {counter:state.counter-2}

}
return state
}

const store=createStore(reducer)
export default store