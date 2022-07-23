import React from 'react'
import Header from '../Header/Header';
import UserContext from "../Context/UserContext"
import TripMaker from '../TripMaker/TripMaker';

const user = {
  name: "Dario",
  email:"dominguez.dario@gmail.com"
}
let headerlogo ={
  image: "logo.png"
}

function App() {
  return (
      <React.StrictMode>
          <UserContext.Provider value={user}>
          <Header image ={__dirname + "images/" + headerlogo.image}/>
          <TripMaker></TripMaker>
          </UserContext.Provider>
      </React.StrictMode> 
  );
}

export default App;
