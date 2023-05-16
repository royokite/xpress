import React, { useState } from "react";
import './App.css';
import InterestForm from './components/InterestForm';
import PopupModal from './components/PopupModal'

function App() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <InterestForm setIsOpen={setIsOpen}/>
      {isOpen && <PopupModal setIsOpen={setIsOpen} />}
    </>
  );
}

export default App;
