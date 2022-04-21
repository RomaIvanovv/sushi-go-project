import React from 'react';
import './App.css';
import Header from './Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Offer from './Main/Offer/Offer';
import Roles from './Main/Roles/Roles';
import HotRoles from './Main/HotRoles/HotRoles';
import dada from './dada/dada';
import Footer from './Footer/Footer';
import Philadelphia from './Main/Philadelphia/Philadelphia';
import Sets from './Main/Sets/Sets';
import Information from './Information/Information';
import Questions from './Questions/Questions';
import Drinks from './Main/Drinks/Drinks';
import BasketYour from './BasketYour/BasketYour';



function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        
        <div className='MainContent'>
          <Routes>
            <Route path='/Offer' element={<Offer/>} />

            <Route path='/' element={<Roles dada={dada}/>} />

            <Route path='/HotRoles' element={<HotRoles dada={dada}/>} />
            
            <Route path='/Philadelphia' element={<Philadelphia dada={dada}/>} />

            <Route path='/Sets' element={<Sets dada={dada}/>} />

            <Route path='/Drinks' element={<Drinks dada={dada}/>} />

            <Route path='/Basket' element={<BasketYour dada={dada}/>} />
              
          </Routes>
          </div>

          <Information />

          <Questions questions={dada.questions}/>

          <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
