import SignUp from './SignUp';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <SignUp/>
    </div>
  );
}

export default App;
