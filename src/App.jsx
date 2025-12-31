import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import "../public/styles.css";
import { useState } from "react";
// import notes from "./notes";

function App() {
  const [notes, setNotes] = useState([]);
  const [nextId, setNextId] = useState(0);

  function addNote(inputTitle, inputContent) {
    setNextId(nextId + 1);
    const newNote = {
      id: nextId,
      title: inputTitle,
      content: inputContent,
    };
    setNotes((prevNotes) => {
      return [newNote, ...prevNotes];
    });
  }

  function deleteNote(idToDelete) {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== idToDelete));
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map((i) => {
        return (
          <Note
            deleteNote={deleteNote}
            key={i.id}
            id={i.id}
            title={i.title}
            content={i.content}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
