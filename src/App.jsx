import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import CreateArea from "./Components/CreateArea";
import Note from "./Components/Note";

function App() {
  const initialArr = localStorage.getItem("notes")
    ? JSON.parse(localStorage.getItem("notes"))
    : [];
  const [notes, setNotes] = useState(initialArr);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }
  function deleteNote(id) {
    const filteredNotes = notes.filter((noteItem, index) => index !== id);
    setNotes(filteredNotes);
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {
        notes.map((noteItem, index) => (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        ))
      }
      <Footer />
    </div>
  )
};

export default App
