

class CNote{
    id;
    date;
    message;
    title;
    constructor(date,title,message)
    {
        let d = new Date(date);
        this.date = d;
        this.title = title ;
        this.message = message;
    }
}
class CBoardDescription{
    constructor(id,name){
        this.id = id;
        this.name = name;
    }
}
class CBoard{
    notes = new Array();
    boardDescription;
    constructor(id,name)
    {
        this.boardDescription = new CBoardDescription(id,name);
    }
    Add(note){
        note.id =this.notes.length;
        this.notes.push(note);
    }
    Delete(id){
        if(id >= 0 && id < this.notes.length)
            this.notes.splice(id,1);
    }
    Update(note)
    {
        if(note.id)
        {
            let found = this.notes.find(element =>  element.id === note.id);
            if(found)
                found = note;
        }
    }

}

class CNoteBoard{
    noteBoard = new Array();
    current;
    constructor(){
        console.log("Initial CNoteBoard");
    }
    Add(id,name){
        let foundNotBoard = this.noteBoard.find(element => {return element.id === id && element.name === name;});
        if(!foundNotBoard)
        {
                foundNotBoard = new CBoard(id,name);
                this.noteBoard.push(foundNotBoard);
        }
        this.current = foundNotBoard;
    }
    CreateNote(date,title,message){
        this.current.Add(new CNote(date,title,message));
    }
    DeleteNote(id)
    {
        this.current.Delete(id);
    }
    EditNote(note)
    {
        this.current.Update(note);
    }
    Change(id){
        let temp = this.noteBoard.find(element =>  element.boardDescription.id == id);
        if(temp) this.current = temp;
    }
    GetNotes()
    {
        return this.current.notes;
    }
    GetNoteBoard()
    {
        let board = new Array();
        this.noteBoard.forEach(element => board.push(element.boardDescription));
        return board;
    }
}