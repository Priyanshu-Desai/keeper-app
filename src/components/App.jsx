import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [savedNotes, addSavedNote] = React.useState([])

  function addNote(newNote) {
    addSavedNote(prevNotes => {
      return  [...prevNotes, newNote]
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      {savedNotes.map((noteItem, index) => {
        return <Note key={index} title={noteItem.title}content={noteItem.content} />
      })}
      <Footer />
    </div>
  );
}

export default App;
