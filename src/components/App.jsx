import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, AddNote] = useState([
    {
      title: "",
      content: ""
    }
  ]);
  function insertNote(inputNote) {}
  return (
    <div>
      <Header />
      <CreateArea addNote={} />
      <Note key={1} title="Note title" content="Note content" />
      <Footer />
    </div>
  );
}

export default App;
