import React, {useState, useEffect} from "react";
import YourInfo from "./YourInfo";
import SelectPlan from "./SlectPlan";
import AddOns from "./AddOns";
import Summary from "./summary";
import "../App.css";

const Form = ({pageno, setPageno})=>{

    const [page, setPage] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState();
    const [plan, setPlan] = useState("");
    const [OnlineServices, setOS] = useState(0);
    const [LargerStorage, setLS] = useState(0);
    const [CustomProfile, setCS] = useState(0);
    //const [addon, setAddon] = useState([]);

    const addons={
        "OnlineServices":0,
        "LargerStorage":0,
        "CustomProfile":0
    };


    const formm = {};

    useEffect(()=>{
        formm["Name"]=name;
        formm["Email"]=email;
        formm["Phone"]=phone;
        formm["Plan"]=plan;
        formm["Addons"]={"OnlineServices":OnlineServices, "LargerStorage":LargerStorage, "CustomProfile":CustomProfile};
        setPageno(page);
    }, [page]);



    const FormTitles = [
        "Personal info", 
        "Select Your Plan", 
        "Pick add-ons", 
        "Finishing up"
    ];
    
    const tagLines = [
        "Please provide your name, email address, and phone number.",
        "You have the option of monthly or yearly billing.",
        "Add-ons help enhance your gaming experience.",
        "Double-check everything looks okay before confirming"
    ]

    const PageDisplay =()=>{
        if(page==0){
            return <YourInfo name={name} setName={setName} email={email} setEmail={setEmail} phone={phone} setPhone={setPhone}/>;
        }else if(page==1){
            return <SelectPlan plan={plan} setPlan={setPlan}/>;
        }else if(page==2){
            return <AddOns OnlineServices ={OnlineServices} LargerStorage={LargerStorage} CustomProfile={CustomProfile} setOS={setOS} setLS={setLS} setCS={setCS}/>;
        }else if(page==3){
            return <Summary plan={plan} OnlineServices ={OnlineServices} LargerStorage={LargerStorage} CustomProfile={CustomProfile} page={page} setPage={setPage} />;
        };
    };
    const [btn1, setBtn1] = useState("Next Step");

    useEffect(()=>{
        if(page==3){
            setBtn1("Confirm");
        }else{
            setBtn1("Next Step");
        }
    },[page])


    return(
        <div className="form">
            <div className="form-container">
                
                <div className="header">
                    <h1>{FormTitles[page]}</h1>
                    <p className="subtext">{tagLines[page]}</p>
                </div>
                
                <div className="inputs">
                    {PageDisplay()}
                </div>

                <div className="nav-buttons">
                    <button className={`custom-button ${page<=0 ? 'disabled' : ''}`} disabled={page<=0} onClick={()=>{setPage(page-1)}}>Go Back</button>
                    <div></div>
                    <button className={`custom-button ${page>=3 ? 'disabled' : ''}`} onClick={()=>{if(page!=3){setPage(page+1)}}}>{btn1}</button><br/>
                </div>
            </div>
        </div>
    );
}
export default Form;
