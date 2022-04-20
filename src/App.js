import logo from './logo.svg';
import './App.css';

import { AbhiTable } from './models';

import { createAbhiTable } from './mutations';
import { API ,graphqlOperation} from 'aws-amplify'

function App() {
  

  

  async function ten(){
    const todo = { name: "My first todo", address: "Hello world!", Pincode:302012 };
    await API.graphql(graphqlOperation(createAbhiTable, {input: todo}));
  }

  return (
    
          
        <>
      
         <div>
           <form>
           {/* //this is main button from which data is inserted in the table */}

             <button onClick={ten()}>add to table</button> 
             {/* <label>enter the name</label>
             <input type='text'></input><br/>
             <label>enter the description</label>
             <input type='text'></input><br/> */}
            {/* <input type="button">add to table</input> */}
           </form>
                  
          
          </div>
          
        </>
     
    
       
       
  )
}

export default App;
