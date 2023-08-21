import React, { useState, useEffect } from "react";

const SelectPlan = ({plan, setPlan}) =>{

    const [arprice, setArprice] = useState("$9/mo");
    const [adprice, setAdprice] = useState("$12/mo");
    const [prprice, setPrprice] = useState("$15/mo");
    const[i,setI] = useState("Month");


    const handleCheckboxChange = () =>{
        if (i=="Month"){
            setI("Year");
        }else{
            setI("Month");
        }
    };


    useEffect(()=>{
        if(i=="Year"){
            setArprice("$90/yr");
            setAdprice("$120/yr");
            setPrprice("$150/yr");
        }else{
            setArprice("$9/mo");
            setAdprice("$12/mo");
            setPrprice("$15/mo");
        }
    },[i])




    return(
        <div>
            
            <div class="plan-container">
                <div class={plan=="Arcade "+i?"plan-box activee":"plan-box"} onClick={()=>{if(i=="Month"){ setPlan("Arcade Month");}else{ setPlan("Arcade Year"); }}}>
                    <h2>Arcade</h2>
                    <p>{arprice}</p>
                </div>
                <div class={plan=="Advanced "+i?"plan-box activee":"plan-box"} onClick={()=>{if(i=="Month"){setPlan("Advanced Month");}else{ setPlan("Advanced Year");}}}>
                    <h2>Advanced</h2>
                    <p>{adprice}</p>
                </div>
                <div class={plan=="Pro "+i?"plan-box activee":"plan-box"} onClick={()=>{if(i=="Month"){ setPlan("Pro Month");}else{ setPlan("Pro Year"); }}}>
                    <h2>Pro</h2>
                    <p>{prprice}</p>
                </div>
            </div>
            <div className="plan-toggle">
                <p>Monthly</p>
                <input type="checkbox" id="switch" class="checkbox" onChange={handleCheckboxChange} />
                <label for="switch" class="toggle"></label>
                <p>Yearly</p>
            </div>
            

        </div>
    )
};

export default SelectPlan;