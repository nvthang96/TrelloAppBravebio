import { useState } from "react"
import { Container, Draggable } from "react-smooth-dnd";
const Card = (props) =>{
    const {id} = props
   
    const handleEdit = (id) => {
        alert(id)
    }
  
    return(
        <>

            <ul>
            <li onDoubleClick={()=>handleEdit(id)}>{id}</li>
            </ul>
        </>
    )
}
export default Card