import React from "react";

const Summary = ({plan, OnlineServices, LargerStorage, CustomProfile, Page, setPage}) => {

    let baseplan = plan;
    let baseplanname = "";
    let planprice = "-";
    let pprice=0;
    let aprice=0;
    let i = "Mo";
    let totalprice=0;

    const DisplayOS=()=>{
        if(OnlineServices==1){
            aprice+=1;
            return(
                <div className="bill-addon">
                    <p>Online Services</p>
                    <p>+$1/mo</p>
                </div>
            )
        }
    };

    const DisplayLS=()=>{
        if(LargerStorage==1){
            aprice+=2;
            return(
                <div className="bill-addon">
                    <p>LargerStorage</p>
                    <p>+$2/mo</p>
                </div>
            )
        }
    };

    const DisplayCS=()=>{
        if(CustomProfile==1){
            aprice+=2;
            return(
                <div className="bill-addon">
                    <p>Customizable Profile</p>
                    <p>+$2/mo</p>
                </div>
            )
        }
    };


    if(baseplan=="Arcade Month"){
        baseplanname="Arcade (Month)"
        planprice = "$9/mo";
        pprice = 9;

    }else if(baseplan=="Arcade Year"){
        baseplanname="Arcade (Year)";
        planprice = "$90/yr";
        pprice = 90;
        i="Yr";
    }else if(baseplan=="Advanced Month"){
        baseplanname="Advanced (Month)";
        planprice = "$12/mo"
        pprice=12;
    }else if(baseplan=="Advanced Year"){
        baseplanname="Advanced (Year)";
        planprice="$120/yr";
        pprice=120;
        i="Yr"
    }else if(baseplan=="Pro Month"){
        baseplanname="Pro (Month)";
        planprice="$15/mo"
        pprice=15;
    }else if(baseplan=="Pro Year"){
        baseplanname="Pro (Year)";
        planprice = "$150/yr";
        pprice=150;
        i="Yr";
    } else{
        baseplanname="No Plan Selected";
    }

    if (i=="Yr"){
        totalprice = pprice;
    }else{
        totalprice = pprice;
    }

    return(
        <div className="summary">
            <div className="bill">
                <div className="base">
                    <div className="base-plan">
                        <p className="base-plan-name">{baseplanname}</p>
                        <p className = "change-base-plan" onClick={()=>{setPage(1)}}><u>Change</u></p>
                    </div>
                    <p className="base-price">{planprice}</p>
                </div>

                <div className="Line"> </div>
    
                {DisplayOS()}
                {DisplayLS()}
                {DisplayCS()}
            </div>

            <div className="total">
                <p>Total (Per {i})</p>
                <p className="Total-Price">${totalprice+aprice}/{i}</p>
            </div>
        </div>
    )

    
}

export default Summary;