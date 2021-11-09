class CNote{
    id;
    date;
    note;
    constructor(date,note)
    {
        this.date = date;
        this.note = note;
    }
}

class CNotes{
    notes = new Array();

    constructor(id,name)
    {
        this.id = id;
        this.name = name;
    }
    Add(note){
        note.id =this.notes.length;
        this.notes.push(note);
    }
    Remove(id){
        if(id > 0 && id <= this.notes.length)
            this.notes.splice(id-1,1);
    }

}

class CNoteBoard{
    noteBoard = new Array();
    current;

    Add(id,name){
        let element = this.noteBoard.find(element => {return element.id === id && element.name === name;});
        if(!element)
            {
                this.current = new CNotes(id,name);
                this.noteBoard.push(this.current)
            };
    }
    Change(id){
        let temp = this.noteBoard.find(element =>  element.id === id);
        if(temp) this.current = temp;
    }

}