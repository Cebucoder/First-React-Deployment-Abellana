import { Link } from "react-router-dom";

const NavigationBar = () => {
    return ( 
        <div class="navigation">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Work">Work</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
                <li><Link to="/Cart">Cart</Link></li>
                <li><Link to="/HookUse">use Reference Sample</Link></li>
                <li><Link to="/HookReducer">Use Reducer Hook Sample</Link></li>
            </ul>
        </div>
     );
}
 
export default NavigationBar;