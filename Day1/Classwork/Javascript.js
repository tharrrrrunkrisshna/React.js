import React from 'react'

console.log("Message to Developer")
function Javascript() {
    const B=()=>{
        alert("Message from Javascript Alert!")
    }
  return (
    <div>
        <center>
        <button onClick={B}>Click</button>
        </center>
    </div>
  )
}

export default Javascript
