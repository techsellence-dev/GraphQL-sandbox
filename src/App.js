import logo from './logo.svg';
import './App.css';
// import { DataStore } from '@aws-amplify/datastore';
import { AbhiTable } from './models';
// import {DataStore} from 'aws-amplify';
import { createAbhiTable } from './mutations';
import { API ,graphqlOperation} from 'aws-amplify'
// import { DataStore } from '@aws-amplify/datastore';
// import { AbhiTable } from './models';

// useEffect(()=>{
//   await DataStore.save(
//       new AbhiTable({
//     	"name": "Lorem ipsum dolor sit amet",
//     	"password": "Lorem ipsum dolor sit amet",
//     	"address": "Lorem ipsum dolor sit amet",
//     	"Pincode": 1020
//     })
//     );
// },[])

function App() {
  // await DataStore.save(
  //   new AbhiTable({
	// 	"name": "Lorem ipsum dolor sit amet",
	// 	"password": "Lorem ipsum dolor sit amet",
	// 	"address": "Lorem ipsum dolor sit amet",
	// 	"Pincode": 1020
	// })
  // );
  // const original =await DataStore.query(Post,'123')
  // await DataStore.saver(
  //   Post.copyOf(original,updated=>{
  //     updated.name=`name ${Date.now()}`;
  //   })
  // )

  

  async function ten(){
    const todo = { name: "My first todo", address: "Hello world!", Pincode:302012 };
    await API.graphql(graphqlOperation(createAbhiTable, {input: todo}));
  }
// (async () => {
//   const result = await client.mutate({
//     mutation: gql(createAbhiTable),
//     variables: {
//       input: {
//         name: 'Use AppSync',
//         description: 'Realtime and Offline',
//       }
//     }
//   });
//   console.log(result.data.createTodo);
// })();
// const main=async()=>{

// }
  
// const todo = { name: "Raj", description: 9090,address:"panic-texh",pincode:909090 };

// /* create a todo */
// await API.graphql(graphqlOperation(createAbhiTable, {input: todo}));
  return (
    
          
        <>
      
         <div>
           <form>
             <label>enter the name</label>
             <input type='text'></input><br/>
             <label>enter the description</label>
             <input type='text'></input><br/>
             <button onClick={ten()}>add to table</button>
            {/* <input type="button">add to table</input> */}
           </form>
                  
          
          </div>
          
        </>
     
    
       
       
  )
}

export default App;
