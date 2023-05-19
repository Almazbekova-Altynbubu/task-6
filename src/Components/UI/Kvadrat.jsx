import React, { useReducer } from 'react'

const Kvadrat = () => {


const formReducer=(state,action)=>{
    console.log(action);
    if(action === "BLUE"){
        return{
            ...state,
          yellow:"blue"
        }
        
    }
    if(action === "RED"){
        return{
          yellow: "red"
        }
    }

}


  const [kvadColor, dispatchColor] = useReducer(formReducer, "yellow")

  const onShowColor=()=>{
     dispatchColor("BLUE")
  }
  const onShowColorTwo=()=>{
     dispatchColor("RED")
  }
  return (
    <div>
      <div style={{width:"200px",height:"200px", border: "1px solid black", backgroundColor:kvadColor.yellow , margin: "auto"} }></div>
      <button onClick={onShowColor}>BLUE</button>
      <button onClick={onShowColorTwo}>RED</button>

    </div>
  )
}


export default Kvadrat
