
var noteBoard = new CNoteBoard();
noteBoard.Add("0","Todo List");
noteBoard.Add("1","Events");
 UpdateboardName();
 UpdatenoteDate()

 function selectBoard()
 {
     var selectedBoard  = document.querySelector('#boardName');
     var s = selectedBoard.options[selectedBoard.selectedIndex].value;
     var index = selectedBoard.selectedIndex;
     var id = selectedBoard.value;
     noteBoard.Change(index);
     updateBoard();
 }

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

function updateBoard(){
    var noteTableBody = document.querySelector('.notesNoteView');
    noteTableBody.innerHTML ="";
    noteBoard.GetNotes().sort((a,b) => a.date - b.date).forEach(item =>{
        /* createTableNoteRow(item);  */
        createNote(item);
    })
}
function AddNote()
{
    let noteDate = document.getElementById("noteDate").value;
    let noteTitle = document.getElementById("noteTitle").value;
    let noteMessage = document.getElementById("noteMessage").value;
    if(noteDate == "" || noteTitle =="" ||  noteMessage == "")
        {
            return;
        }
    noteBoard.CreateNote(noteDate,noteTitle,noteMessage);
    console.log(noteBoard);
    updateBoard();
}
function createNote(note )
{

    var noteElement = document.createElement('div');
    noteElement.className = "note";
    var element = document.createElement('div');
    element.innerHTML = '<i class="fas fa-times-circle fa-2x"></i>';
    element.className ='gNoteClose';
    element.addEventListener('click', function(e) {

        console.log(this.getAttribute('data-id'));
        noteBoard.DeleteNote(this.getAttribute('data-id'));
        updateBoard();
    });
    element.setAttribute('data-id', note.id);
    noteElement.appendChild(element);
    element = document.createElement('div');
    element.innerText = note.title;
    element.className = 'gNoteTitle';
    noteElement.appendChild(element);
    element = document.createElement('div');
    element.className = 'gNoteDate';
    element.innerText = `${note.date.toDateString()} ${note.date.getHours()}:${note.date.getMinutes()}`;
    let elpasse = Date.now()- note.date;
    let noteFilterToday = document.getElementById("noteFilterToday").checked;
    if(note.date.toDateString() == new Date().toDateString())
    {
        noteElement.style.backgroundColor = "green";
    }
    else if(elpasse > 0)
    {
        noteElement.style.backgroundColor = "red";
        noteElement.classList.add('notePassedDate');
        setHide(noteElement,noteFilterToday);
    }
    else{
        noteElement.style.backgroundColor = "blue";
        setHide(noteElement,noteFilterToday);
    }
    noteElement.appendChild(element);
    element = document.createElement('p');
    element.className = 'gNoteMessage';
    element.innerText = note.message;
    noteElement.appendChild(element);
    noteTableBody = document.querySelector('.notesNoteView').appendChild(noteElement);

    

}

function createTableNoteRow( note)
{
    var tr = document.querySelector('.notesTableView');
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
function SortByDate(arrayTosort)
{
    return arrayTosort.sort(ComapareNoteDate);
}
function ComapareNoteDate(noteA ,noteB)
{
    if(noteA.date > noteB.date)
        return 1;
    else if(noteA.date > noteB.date)
    {
        return -1;
    }
    else
    return 0;
}

function OnDelete(e){
    console.log(this);
}
function noteFilterTodayChanged(){
    console.log(document.getElementById("noteFilterToday").checked);
    updateBoard()
}