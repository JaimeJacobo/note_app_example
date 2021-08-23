import react from "react";
import NoteName from "./NoteName";

const NoteContainer = ({ notes }) => {
  return (
    <div>
      {notes.map((note, index) => (
        <NoteName note={note} key={note.id} />
      ))}
    </div>
  );
};

export default NoteContainer;
