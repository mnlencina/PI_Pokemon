import React, { useEffect} from 'react';
import Nav from './components/nav/Nav.jsx'
import LadingPag from './components/ladingPag/LadingPag';
import Cards from "./components/cards/Cards.jsx"
import Create from "./components/create/Create.jsx"
import { Route, Routes, useLocation} from 'react-router-dom';
import './App.css'
import { useDispatch } from 'react-redux';
import { addAllPokemon, addAllTypes } from './redux/actions/index.js';
import Detail from './components/detail/Detail.jsx';

function App() {
  const dispatch = useDispatch()
  const location = useLocation()
  
  
  useEffect(()=>{
     dispatch(addAllPokemon())
     dispatch(addAllTypes())
  },[dispatch])
  
  return (
    <div className="appDiv">
      {location.pathname !== '/' && <Nav/>}
      <Routes>
        <Route path="/" element={<LadingPag/>} />
        <Route path="/home"  element={<Cards/>}/>
        <Route path="/create" element={<Create/>} />
        <Route path='detail/:idDetail' element={<Detail/>} />
      </Routes>
    </div>
  );
}

export default App;
