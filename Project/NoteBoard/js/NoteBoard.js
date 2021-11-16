var noteBoard = new CNoteBoard();

 noteBoard.Add("059828392","Yossi");

 UpdateboardName();
 UpdatenoteDate()
 function UpdateboardName()
 {
     noteBoard.GetNoteBoard().forEach(item => {
         let boardName = document.getElementById("boardName");
         let boardNameItem = document.createElement('option');
         boardNameItem.setAttribute.value = item.id;
         boardNameItem.innerText = item.name;
         boardName.appendChild(boardNameItem);
     })
 }
 function UpdatenoteDate()
 {
     let date = new Date(); 
     let hourFormat = formattedNumber = ("0" + date.getHours()).slice(-2);
     let dateString = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}T${hourFormat}:${date.getMinutes()}`;
     /* document.getElementById('noteDate').value = dateString; */
     setDateTime(document.getElementById('noteDate'),date);
 }
 function setDateTime(element, date) {
  
    const dateForDateTimeInputValue = date => new Date(date.getTime() + new Date().getTimezoneOffset() * -60 * 1000).toISOString().slice(0, 19);
    element.value = timestampToDatetimeInputString(Date.now());;
}

function timestampToDatetimeInputString(timestamp) {
    const date = new Date((timestamp + _getTimeZoneOffsetInMs()));
    // slice(0, 19) includes seconds
    return date.toISOString().slice(0, 19);
  }
  
  function _getTimeZoneOffsetInMs() {
    return new Date().getTimezoneOffset() * -60 * 1000;
  }
/*noteBoard.Add("A","B");
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
console.log(noteBoard); */

function AddNote()
{
    noteBoard.CreateNote(document.getElementById("noteDate").value,document.getElementById("noteTitle").value,document.getElementById("noteMessage").value);
    console.log(noteBoard);
    var noteTableBody = document.querySelector('.notesNoteView');
    noteTableBody.innerHTML ="";
    noteBoard.GetNotes().forEach(item =>{
        createTableNoteRow(item); 
        createNote(item);
    })
}
function createNote(note)
{
/*     <div class="note">
    <div>Title</div>
    <div>Date</div>
    <div>Lorem ipsum dolor sit amet.</div>
</div> */
    var noteElement = document.createElement('div');
    noteElement.className = "note";
    var element = document.createElement('div');
    element.innerText = note.title;
    noteElement.appendChild(element);
    element.innerText = note.date;
    noteElement.appendChild(element);
    element.innerText = note.message;
    noteElement.appendChild(element);
    noteTableBody = document.querySelector('.notesNoteView').appendChild(noteElement);

    

}
function createTableNoteRow( note)
{
    var tr = document.querySelector('.noteTableBody');
    var newTr = document.createElement('tr');
    var newColumn = document.createElement('td');
    newColumn.innerText =  note.id;
    newTr.appendChild(newColumn);
    newColumn = document.createElement('td');
    newColumn.innerText =  note.date;
    newTr.appendChild(newColumn);
    newColumn = document.createElement('td')
    newColumn.innerText =  note.title;
    newTr.appendChild(newColumn);
    newColumn = document.createElement('td');
    newColumn.innerText = note.message;
    newTr.appendChild(newColumn);
    tr.appendChild(newTr);
}

