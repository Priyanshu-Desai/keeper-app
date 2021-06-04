import React from "react";

function CreateArea(props) {
  const [note, setNote] = React.useState({
    title: '',
    content:''
  })

  function getNote(event) {
    const {name, value} = event.target
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      }
    })
  }

  function submitNote(event) {
    props.onAdd(note)
    event.preventDefault()
  }

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={getNote} value={note.title}/>
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={getNote} value={note.content}/>
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
