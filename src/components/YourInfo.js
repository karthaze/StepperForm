import React from "react";

const YourInfo = ({name, setName, email, setEmail, phone, setPhone}) =>{
    return(
        <div className="your-info">

            <p>Name</p>
            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="e.g Stephen King"/>

            <p>Email Address</p>
            <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="e.g stephenking@lorem.com"/>

            <p>Phone Number</p>
            <input type="text" value={phone} onChange={(e)=>{setPhone(e.target.value)}} placeholder="e.g 77-7777-7777"/>

        </div>
    )
}

export default YourInfo;