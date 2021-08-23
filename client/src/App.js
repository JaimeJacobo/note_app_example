import "./App.css";
import Note from "./components/Note";
import NoteContainer from "./components/NoteContainer";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/get-notes")
      .then((response) => {
        setNotes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <Note />
      <NoteContainer notes={notes} />
    </div>
  );
}

export default App;
