import React, { useState } from "react";
import Card from "../card";
import Button from "../button";
// import Input from "../input";

const SignUp = () => {
  const { value, setValue } = useState("");
  return (
    <div className="login">
    <Card
      head="Sign Up"
      details="Fill the following information to create an account"
    > 
     <form style={{display:"flex" ,flexDirection:"column"}}>
     <label for="signup" style={{fontSize:"30px" , fontWeight:'bold'}}> Name </label>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{width: "500px" , height: "40px", border:"1px solid #BEC2C6",borderRadius:"6PX"
        }}
      />
      <label for="login" style={{fontSize:"30px" , fontWeight:'bold'}}> Email </label>
      <input
        type="email"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{width: "500px" , height: "40px", border:"1px solid #BEC2C6",borderRadius:"6PX"
        }}
      />
      </form>
      <Button buttonName = 'Sign up' singPh='Already have an account? ' page ='Login'/>
    </Card>
    </div>
  );
};

export default SignUp;