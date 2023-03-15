import { useEffect, useState } from "react";

const Timer = () => {
    const [time,timeValue] = useState(60);
    useEffect(() =>{
        setTimeout(()=>{
            timeValue(() => time - 1);
        },1000);
    });
    return ( 
        <div>
            <h1>{time}</h1>
        </div>
     );
}
 
export default Timer;