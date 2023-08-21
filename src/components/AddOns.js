import React, {useEffect, useState} from "react";

const AddOns = ({OnlineServices, LargerStorage, CustomProfile, setOS, setLS, setCS}) =>{

    const OS=()=>{
        if (OnlineServices==0){setOS(1)}else{setOS(0)};};

    const LS=()=>{
        if (LargerStorage==0){setLS(1)}else{setLS(0)};};
    
    const CS=()=>{
        if (CustomProfile==0){setCS(1)}else{setCS(0)};};


    return(
        <div className="addons">

            <div className={OnlineServices==1?"addon activee":"addon"} onClick={OS}>
                <input type="checkbox" id="c1" checked={OnlineServices==1} onClick={OS}/>
                <div className="addon-content">
                    <p className="content-head">Online service</p>
                    <p className="content-content">Access to multiplayer games</p>
                </div>
                <p className="price">+$1/mo</p>
            </div>

            <div className={LargerStorage==1?"addon activee":"addon"} onClick={LS}>
                <input type="checkbox" id="c2" checked={LargerStorage==1} onClick={LS}/>
                <div className="addon-content">
                    <p className="content-head">Larger storage</p>
                    <p className="content-content">Extra 1TB of cloud save</p>
                </div>
                <p className="price">+$2/mo</p>
            </div>

            <div className={CustomProfile==1?"addon activee":"addon"} onClick={CS}>
                <input type="checkbox" id="c3" checked={CustomProfile==1} onClick={CS}/>
                <div className="addon-content">
                    <p className="content-head">Customizable Profile</p>
                    <p className="content-content">Custom theme on your profile</p>
                </div>
                <p className="price">+$2/mo</p>
            </div>

        </div>
    )
}

export default AddOns;