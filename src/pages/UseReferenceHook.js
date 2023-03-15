import { useRef, useEffect } from "react";
import RenderCounter from "../components/renderCounter";

const UseReferenceHook = () => {
    return ( 
        <div>
            <h1>use Refernce Hook</h1>
            <input ref={selectingElements} type="text" className="SampleClass BasicsClass" />
            <button onClick={getValue}>Get Value of text</button>
            <button onClick={changeValue}>Change Value of texct</button>
            <button onClick={getClass}>Get the ClassLsit of text</button>
            <RenderCounter></RenderCounter>
        </div>
     );
}
 
export default UseReferenceHook;