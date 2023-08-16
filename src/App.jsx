import React, { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import CreateArea from "./Components/CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }
  return (
    <div>
      <Header />
      <CreateArea />
      <Footer />
    </div>
  )
};

export default App
