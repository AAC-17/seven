import Jatin from "./Jatin";
import './../styles/homes.css'
import Home from './Home';

// import Home from './Home';

function App(){
    return(
       


  
    <div style={{marginTop : '-3.5rem'}}>
      <BrowserRouter >
        <Routes>
          <Route path="/Jatin" element ={<Jatin/>} />
           
        </Routes>
      </BrowserRouter>
    </div>
     
    
  )
  
}


export default App