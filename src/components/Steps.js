import React from "react";

const Steps = ({pageno, setPageno}) =>{

    return(
        <div className="steps">
            
            <div className="step">
                <div className={`s ${pageno==0 ? 'active' : ''}`}>1</div>
                <div className="s-content">
                    <p className="stepname">Step 1</p>
                    <p className="name">Your Info</p>
                </div>
            </div>

            <div className="step">
                <div className={`s ${pageno==1 ? 'active' : ''}`}>2</div>
                <div className="s-content">
                    <p className="stepname">Step 2</p>
                    <p className="name">SELECT PLAN</p>
                </div>
            </div>

            <div className="step">
                <div className={`s ${pageno==2 ? 'active' : ''}`}>3</div>
                <div className="s-content">
                    <p className="stepname">Step 3</p>
                    <p className="name">ADD-ONS</p>
                </div>
            </div>

            <div className="step">
                <div className={`s ${pageno==3 ? 'active' : ''}`}>4</div>
                <div className="s-content">
                    <p className="stepname">Step 4</p>
                    <p className="name">SUMMARY</p>
                </div>
            </div>



        </div>
    )
}

export default Steps;