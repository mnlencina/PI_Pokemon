import React, { useEffect} from 'react';
import Nav from './components/nav/Nav.jsx'
import LadingPag from './components/ladingPag/LadingPag';
import Cards from "./components/cards/Cards.jsx"
import Create from "./components/create/Create.jsx"
import { Route, Routes, useLocation} from 'react-router-dom';
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { addAllPokemon } from './redux/actions/index.js';

function App() {
  const dispatch = useDispatch()
  const location = useLocation()
  const {allPokemon} = useSelector((state)=> state)
  
  useEffect(()=>{
     dispatch(addAllPokemon())
  },[dispatch])
  
  return (
    <div className="App">
      {location.pathname !== '/' && <Nav/>}
      <Routes>
        <Route path="/" element={<LadingPag/>} />
        <Route path="/home"  element={<Cards allPokemon={allPokemon}/>}/>
        <Route path="/create" element={<Create/>} />
      </Routes>
    </div>
  );
}

export default App;
