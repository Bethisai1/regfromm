import React from "react";
import './Regform.css'
import { useState } from "react";

function RegistrationFrom(){

    const[firstname,setfirstname]=useState("");
    const[lastname,setlastname]=useState("");
    const[mobileno,setmobileno]=useState("");
    const[emailid,setemailid]=useState("");
    const [password, setpassword] = useState("");
    const[conformpassword,setconformpassword]=useState("");
    const[Dob,setDob]=useState("");
    const[gender,selectSelectedOption]=useState("");
    const[selectstate,setselectstate]=useState("");
    const[selectcourse,setselectcourse]=useState("");
    const[Deliverymode,setDeliverymode]=useState("");
    const[comments,setcomments]=useState("");
    const[passwordError,setpasswordError]=useState(false);
        

    const handleOptionChange=(event)=>{
        selectSelectedOption(event.target.value);
    }
    const handleOption=(event)=>{
        setDeliverymode(event.target.value)
    }
    const hadleSubmit=(e)=>{
        e.preventDefault();
        if(password !== conformpassword){
            setpassword(true);
        }
        else {
            setpasswordError(false)
            console.log("firstname:"+firstname)
            console.log("lastname:"+lastname)
            console.log("emailid:"+emailid)
            console.log("passwprd:"+password)
            console.log("onformpassword:"+conformpassword)
            console.log("Dob:"+Dob)
            console.log("gender"+gender)
            console.log("selectstate:"+selectstate)
            console.log("selectcourse:"+selectcourse)
            console.log("Deliverymode:"+Deliverymode)
            console.log("comments:"+comments)
            alert("your response updated successfully"+firstname);
        }
        }
    return(
        <>
        <form className="Registration-From" onSubmit={hadleSubmit}>


            <fieldset>
                <legend>personal Infromation</legend>
                <div className="from-group">
                    <label htmlFor="firstname">Firstname:</label>
                    <input placeholder="enter your first Name" type="text"
                    id="firstname" value={firstname} onChange={(e)=>setfirstname(e.target.value)} required/>
                </div>

                <div className="from-group">
                    <label htmlFor="lastname">Lastname</label>
                    <input placeholder="enter your last Name" type="text"
                    id="lastname" value={lastname} onChange={(e)=>setlastname(e.target.value)} required/>
                </div>
                <div className="from-group">
                    <label htmlFor="mobileno">mobileno</label>
                    <input placeholder="enter your mobile Number" type="number"
                    id="mobileno" value={mobileno} onChange={(e)=>setmobileno(e.target.value)} required/>
                </div>
                <div className="from-group">
                    <label htmlFor="emailid">email id:</label>
                    <input placeholder="enter your email id" type="text"
                    id="emailid" value={emailid} onChange={(e)=>setemailid(e.target.value)}
                    required/>
                    </div>
                    <div className="from-group">
                    <label htmlFor="password">password:</label>
                    <input placeholder="enter your password" type="password"
                    id="password" name="password" maxLength={"10"} 
                    value={password} onChange={(e)=>setpassword(e.target.value)} required/>
                    </div>
                    <div className="from-group">
                    <label htmlFor="conformpassword">conform password:</label>
                    <input placeholder="enter your conformpassword" type="password"
                    id="conformpassword" name="conform password"maxLength={"10"}
                    value={conformpassword} onChange={(e)=>setconformpassword(e.target.value)}
                    required/>
                    </div>
                    <div className="from-group">
                    <label htmlFor="dob">DOB:</label>
                    <input placeholder="enter yourc Dob" type="text"
                    id="DOB" 
                    value={Dob} onChange={(e)=>setDob(e.target.value)}
                     required/>
                    </div>
                    <div className="from-group1">
                    <label htmlFor="Gender">Gender</label>
                    <label>Male</label>
                    <input className="gender" type="radio" value="male" 
                    checked={gender==="male"} onChange={handleOptionChange}
                    />
                    <label>female</label>
                    <input className="gender" type="radio" value="female"
                    checked={gender==="female"} onChange={handleOptionChange}/>
                    <label>other</label>
                    <input className="gender" type="radio" value="other"
                    checked={gender==="other"} onChange={handleOptionChange}/>
                    </div>
                    <div className="from-group">
                    <label htmlFor="selectstate">selectstate:</label>
                    <select id="selectstate" 
                    value={selectstate} onChange={(e)=>setselectstate(e.target.value)}
                     required>
                        <option></option>
                        <option>narsampet</option>
                        <option>waranagl</option>
                        <option>hnk</option>
                        <option>hyderbad</option>
                    </select>
                    </div>
            </fieldset>
            <fieldset>
             <legend>course Infromation</legend>
             <div className="from-group">
                <label htmlFor="selectcourse">selectcourse</label>
                <select id="selectcourse" 
                value={selectcourse} onChange={(e)=>setselectcourse(e.target.value)}
                required>
                <option></option>
                <option>javafull stack</option>
                <option>python full stack</option>
                <option>dot net</option>
                <option>sap</option>
                </select>
                </div>
                <div className="from-group1">
                <label htmlFor="Deliverymode">Deliverymode</label>
                </div>
                <div>
                <label>online</label>
                <input className="Deliverymode" type="radio" value="online"
                checked={Deliverymode === "online"} onChange={handleOption}
                />
                <label>ofline</label>
                <input className="Deliverymode" type="radio" value="ofline"
                checked={Deliverymode === "ofline"} onChange={handleOption}
                />
                </div>
                <div className="from-group">
                <label htmlFor="comments">comments</label>
                <textarea id="comments"
                value={comments} onChange={(e)=>setcomments(e.target.value)}
                required></textarea>
                </div>
            </fieldset>
            {passwordError && <p className="warnig">password does not match</p>}

           
            <button type="submit"><h1>Register values</h1></button>       
        </form>

        </>
    )
}
export default RegistrationFrom