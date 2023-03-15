import { useState,useEffect } from "react";
import Timer from "./Timer";

const FormContact = (details) => {
    const [firstName, setFirstName] = useState("Daniel");
    const [lastName, setLastName] = useState("Abellana");

    // below code gitting the data from input and alert it
    // function below is geeting the duser inputted data and send it to contact form using callback
    const submitForm = ()=>{
        // alert(`${firstName},${lastName}`);
        details.callback({firstNameInfo: firstName, lastNameInfo: lastName});
    }

    // when somethings change it will console log the the changes or rednering on console log
    useEffect(()=>{
        console.log("Somethingrendred!");
    })
    return ( 
        <div>
            <Timer></Timer>
            <form action="">
                <label>First Name</label>
                {/* {firstName} this show in the page of what you typ like typing */}
                {/* adding event listener but using "e" */}
                <input type="text" id="firstName" value={firstName} onChange={(e)=> setFirstName(e.target.value)}/>
                <label>Last Name</label>
                <input type="text" id="lastName" value={lastName} onChange={(e)=> setLastName(e.target.value)}/>
                <button type="button" onClick={submitForm}>Submit Form</button>
            </form>
        </div>
     );
}
 
export default FormContact;