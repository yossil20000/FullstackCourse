var noteBoard = new CNoteBoard();

noteBoard.Add("059828392","Yossi");
noteBoard.Add("A","B");
console.log(noteBoard);
noteBoard.CreateNote("21/08/1965","Doctor1","Ceack1");
noteBoard.CreateNote("21/08/1966","Doctor2","Ceack2");
noteBoard.CreateNote("21/08/1967","Doctor3","Ceack3");
console.log(noteBoard);
noteBoard.Change("059828392");
console.log(noteBoard);
noteBoard.CreateNote("21/08/1965","Doctor_059","Ceack1");
noteBoard.Change("A");
let notes = noteBoard.GetNotes();
console.log(notes);
console.log(noteBoard.GetNoteBoard());
noteBoard.DeleteNote(notes[0].id);
console.log(noteBoard);

