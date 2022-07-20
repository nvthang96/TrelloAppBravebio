import { Component, useEffect, useState } from "react";
import pic from '../../thum.jpg';
import FooterApp from "../FooterApp/FooterApp";
import Card from "../../Card/Card";
import { initData } from "../../actions/initdata";
import __ from 'lodash';
import _ from "lodash";
import { Container, Draggable } from "react-smooth-dnd";
import { applyDrag } from "../../DragDrop/dragDrop";
const BoardApp = () =>{

    const[board,setBoard]= useState({});
    const[columns,setColumn]=useState([])
    
    useEffect(()=>{
         const boardinitData = initData.board.find(item => item.id==='board-1');
         if(boardinitData){
            
            setBoard(boardinitData);
            
            setColumn(boardinitData.columns)
            
         }
    },[])
    const onCardDrop = (dropResult)=>{
        
        let newColumns = [...columns];
        newColumns = applyDrag(newColumns,dropResult);
        console.log(console.log("NewColums:",newColumns))

        let newBoards = {...board};
        newBoards.columnOrder = newColumns.map(columns =>{
            console.log("columnsID: ",columns.id)
          
        })
        newBoards.columns = newColumns
      
        setColumn(newColumns);
        setBoard(newBoards);
    }
    
    if(_.isEmpty(board))
    {
        return(
            <>
            <div className="mess-notData">Board not Found</div>
            </>
        )
    }
   
    
    return(
    <> 
                   
    <nav className='navbar-board'>App board
    <div className='board-columns'>
    
        <div>
    <img style={{width:'100%'}} className='IMG-DO' src= {pic} />
    </div>
 
        <div className='header'> Desig & Search</div>
        <Container
                    groupName="col"
                    onDrop={onCardDrop}
                    getChildPayload={index => columns[index]}
                    dragClass="card-ghost"
                    dropClass="card-ghost-drop"
                    onDragEnter={() => {
                      console.log("drag enter:",columns.id );
                    }}
                    onDragLeave={() => {
                      console.log("drag leave:",columns.id);
                    }}
                    onDropReady={p => console.log('Drop ready: ', p)}
                    dropPlaceholder={{                      
                      animationDuration: 150,
                      showOnTop: true,
                      className: 'drop-preview' 
                    }}
                    dropPlaceholderAnimationDuration={200}
                  >
        {columns && columns.length &&columns.map(item=>{
        return(
            <>
            <Draggable key={item.id}>
        <Card
            id={item.id}
        >
        </Card>
        </Draggable>
        
        </>
        )
    })}
          </Container>
    </div>
        <FooterApp/>
    </nav>
  

 
  </>
    )
}

export default BoardApp