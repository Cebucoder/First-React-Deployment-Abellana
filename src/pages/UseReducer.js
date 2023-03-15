import StateCounter from "../components/stateCounter";
import ReducerCounter from "../components/reducerCounter";
const ReducerPage = () => {
    return ( 
        <div>
            <h1>This is Use Reducer page</h1>
            <br></br>
            <StateCounter></StateCounter>
            <br /><br />
            <ReducerCounter></ReducerCounter>
        </div>
     );
}
 
export default ReducerPage;