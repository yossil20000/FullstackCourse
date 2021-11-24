

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
    Add(note,id){
        if(!id)
            note.id =this.notes.length;
        else{
            note.id = id;   
        }
        this.notes.push(note);
    }
    Delete(id){
        if(id)
        {
            this.notes= this.arrayRemoveById(this.notes,id) ;  
        }
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
    arrayRemoveById(arr, value) { 
    
        return arr.filter(function(ele){ 
            console.log(`${ele.id} val:${value} condition:${ele.id != value}`);
            return ele.id != value; 
        });
    }
}

class CNoteBoard{
    noteBoard = new Array();
    current;
    constructor(){
        console.log("Initial CNoteBoard");
    }
    Add(id,name){
        let foundNoteBoard = this.noteBoard.find(element => {return element.id === id && element.name === name;});
        if(!foundNoteBoard)
        {
                foundNoteBoard = new CBoard(id,name);
                this.noteBoard.push(foundNoteBoard);
        }
        this.current = foundNoteBoard;
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
    UpdateFromJson(jsonData)
    {
        jsonData.forEach( item => {
            this.Add(item.boardDescription.id,item.boardDescription.name);
            item.notes.forEach(note => {
                this.CreateNote(note.date,note.title,note.message,note.id)
            })
        })
        this.Change(0);
    }

} 
 /*   0:
 boardDescription: {id: '0', name: 'Todo List'}
notes: Array(1)
0:
date: "2021-11-24T18:01:29.000Z"
id: 0
message: "a"
title: "a"
[[Prototype]]: Object
length: 1
[[Prototype]]: Array(0)
[[Prototype]]: Object
1:
boardDescription: {id: '1', name: 'Events'}
notes: []
[[Prototype]]: Object
length: 2
[[Prototy)*/