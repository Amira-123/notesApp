const fs = require("fs");
// const addNote=(title,body)=>{
//     const notes=loadNotes()
//     notes.push({
//         title,
//         body
//     })
//     saveNotes(notes)
// }
const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicatedTitles = notes.filter((obj) => {
    return obj.title === title;
  });
  if (duplicatedTitles.length === 0) {
    notes.push({
      title,
      body,
    });
    saveNotes(notes);
    console.log("saved sucess");
  } else {
    console.log("this is duplicated title");
  }
};
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json").toString();
    return JSON.parse(dataBuffer);
  } catch (e) {
    return [];
  }
};
const saveNotes = (notes) => {
  const saveData = JSON.stringify(notes);
  fs.writeFileSync("notes.json", saveData);
};
///////////////////////////////////
////////////////////remove
const removeNote = (title) => {
  const notes = loadNotes();
  const keepNotes = notes.filter((note) => {
    return note.title !== title;
  });
  saveNotes(keepNotes);
  console.log("saved");
};
//////////////////////////
///////////////read mrthod
const readNote = (title) => {
  const notes = loadNotes();
  const displaynote = notes.find((note) => {
    return note.title === title;
  });

  saveNotes(displaynote);
  console.log("read");
};
/////////////////////list
const listNote=()=>{
    const notes=loadNotes();
    notes.forEach(element => {
        console.log(element)
    });
}
module.exports = {
  addNote,
  removeNote,
  readNote,
  listNote
};
