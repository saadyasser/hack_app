import React from 'react'

const Button = ({singPh,page ,buttonName}) => {
  return (
    <div>
       <button style={{width: "505px" , height: "44px", border:"none",borderRadius:"6PX" ,backgroundColor :"#2B60D8" , marginTop:"30px",fontSize:"28px",color:"white"
        }}>{buttonName}</button>
        <footer style={{marginTop :"30px" , textAlign:"center" ,fontSize:"28px"}}>
        <span>{singPh}</span>
        <span style={{color:"#2D65E4"}}>{page}</span>
      </footer>
    </div>
  )
}

export default Button