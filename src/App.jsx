import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Note from './components/Note'
import notes from './notes'

function App(){
  return (<div>
    <Header/>
    <Footer/>
    {notes.map( renderedNotes => <Note
      key={renderedNotes.key}
      title={renderedNotes.title}
      content={renderedNotes.content}
      />
    )}
    </div>)
}
export default App
