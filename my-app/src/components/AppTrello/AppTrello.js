import { Component } from "react";
import BoardApp from "../BoardApp/BoardApp";
import { Container, Draggable } from "react-smooth-dnd";
const AppTrello = (props) =>{
    const {nametag} = props
   
    return(
    <> 
    
  

    <div className='App-content'>
    <nav className='navbar-app'>{nametag}</nav>
        <BoardApp></BoardApp>
    </div>

    </>
    )
}

export default AppTrello