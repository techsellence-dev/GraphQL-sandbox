import React from "react";
import * as mutations from './graphql/mutations';
import { API } from 'aws-amplify';

async function display() {
    const userDetails={
        name:"Namrata",
        email:"namrata@gmail.com"
    }
    const userData = await API.graphql({query:mutations.createUser,variables:{input:userDetails}})
    console.log(userData)
}

const SignUp = () => {
  return (
    <div>
      <button onClick={display}>Press</button>
    </div>
  );
};

export default SignUp;