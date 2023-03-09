import React, { useState } from "react";
import Card from "../card";
import Button from "../button";
// import Input from "../input";

const SignIn = () => {
  const { value, setValue } = useState("");
  return (
    <div className="login" >
    <Card
      head="Login"
      details="Fill the following information to access your account!"
    > 
     <form style={{display:"flex" ,flexDirection:"column"}}>
      <label for="login" style={{fontSize:"30px" , fontWeight:'bold'}}> Email </label>
      <input
        type="email"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{width: "500px" , height: "40px", border:"1px solid #BEC2C6",borderRadius:"6PX"
        }}
      />
      </form>
      <Button buttonName = 'Login' singPh='Dont have an account? ' page ='Sign up'/>
    </Card>
    </div>
  );
};

export default SignIn;
