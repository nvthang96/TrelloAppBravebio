import logo from './logo.svg';
import './App.css';
import { Container, Draggable } from "react-smooth-dnd";
import AppTrello from './components/AppTrello/AppTrello';
function App() {
  const onColumnDrop = (dropResult)=>{
      
}
  return (
    // <div className='App-content'>
    //   <nav className='navbar-app'>App bar</nav>
    //   <nav className='navbar-board'>App board
    //   <div className='board-columns'>
    //   <img style={{width:'100%'}} className='IMG-DO' src= {pic} />
    //       <div className='header'> Desig & Search</div>
    //       <ul>
    //         <li>content text</li>
    //         <li>content text</li>
    //         <li>content text</li>
    //         <li>content text</li>
    //         <li>content text</li>
    //       </ul>
          
    //   </div>
    //   <footer className='footer'>
    //         <a href='#'>Add card</a>
    //       </footer>
    //   </nav>
    // </div>
    <>
    <div className='Body'>

     
    <Container
          orientation="horizontal"
          onDrop={onColumnDrop}
          dragHandleSelector=".navbar-app"
          dropPlaceholder={{
            animationDuration: 150,
            showOnTop: true,
            className: 'cards-drop-preview'
          }}
        >    
    <Draggable>
    <AppTrello nametag="App1"></AppTrello>
    </Draggable>

    
    <Draggable>
    <AppTrello nametag="App2"></AppTrello>
    </Draggable>

   
    <Draggable>
    <AppTrello nametag="App3"></AppTrello>
    </Draggable>

    
 </Container>
    </div>
    </>
  );
}

export default App;
