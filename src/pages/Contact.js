import FormContact from "../components/Form";
import { useState, useEffect } from "react";
// function belo is storinng the data from form
const Contact = () => {
    const [data, setData] = useState({});
    // below function is geeting the data and insert to form contact
    const getData = (FormData) => {
        setData(FormData);
    }
    // to use useeffect it only effect when you clike the submit button
    // useEffect(()=>{
    //     console.log('Something Renderd')
    // });

    return ( 
        <div>
            {data["firstNameInfo"]} || {data["lastNameInfo"]}
            <FormContact callback={getData}></FormContact>
            {/* {firstName} {lastName} */}
            <h1>Contact page</h1>
        </div>
     );
}
 
export default Contact;