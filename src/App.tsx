import React from 'react';
import Home from './components/Home';
import 'bootstraps/dist/css/bootstrap.css';
import './App.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBfW-Y--rEPU5Ls9v4UnW78FzmvvXjduhE",
  authDomain: "mediclab-357c0.firebaseapp.com",
  projectId: "mediclab-357c0",
  storageBucket: "mediclab-357c0.appspot.com",
  messagingSenderId: "125169775325",
  appId: "1:125169775325:web:9f554852335819fda3e134"
};

const app = initializeApp(firebaseConfig);

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Home/>
    </React.Fragment>
  )
}

export default App