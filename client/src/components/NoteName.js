import react from "react";

const NoteName = ({ note }) => {
  return (
    <div key={note.id} id={note.id}>
      {note.name}
    </div>
  );
};

export default NoteName;
