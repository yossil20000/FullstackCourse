class Book{
    name;
    idNumber;
    numberOfPage;
    constructor(name,idNumber,numberOfPage)
    {
        this.name = name;
        this.idNumber = idNumber;
        this.numberOfPage = numberOfPage;
    }

}

class Shop{
    books;
    constructor()
    {
        this.books = new Array();
    }
    AddBook(Book)
    {
        this.books.push(Book)
    }
    BoookWithMaxPages()
    {
        var bookId=0;
     
        for(var i=0;i< this.books.length ;i++)
        {
            if(this.books[i].numberOfPage >  this.books[bookId].numberOfPage)
            {
                bookId = i;
            }
        }
        return this.books[bookId];
    }
    GetBookById(idNumber)
    {
        for(var i=0;i< this.books.length ;i++)
        {
            if(this.books[i].idNumber == idNumber)
            {
                return this.books[i];
            }
        }
    }
    GetSortedBooks()
    {
        return this.books.sort(this.CompareAll);
    }
    GetSortedBooksByLength()
    {
        return this.books.sort(this.CompareByLength);
    }
    CompareByLength(left,right) {
        if(left.numberOfPage < right.numberOfPage)
        return -1;
        if(left.numberOfPage > right.numberOfPage)
        return 1;
        return 0;
    }
    CompareByName(left,right) {
        if(left.name < right.name)
        return -1;
        if(left.name > right.name)
        return 1;
        return 0;
    }
    CompareById(left,right) {
        if(left.idNumber < right.idNumber)
        return -1;
        if(left.idNumber > right.idNumber)
        return 1;
        return 0;
    }
    CompareAll(left,right)
    {
        if(left.name < right.name)
        return -1;
        if(left.name > right.name)
        return 1;
        if(left.idNumber < right.idNumber)
        return -1;
        if(left.idNumber > right.idNumber)
        return 1;
        if(left.numberOfPage < right.numberOfPage)
        return -1;
        if(left.numberOfPage > right.numberOfPage)
        return 1;
        return 0;
    }
}

let shop = new Shop();
let b1 = new Book("yossi", 1234,1450);
shop.AddBook(b1);
let b2 = new Book("Natan", 2345,1115);
shop.AddBook(b2);
let b3 = new Book("Dan", 3456,15000);
shop.AddBook(b3);
b3 = new Book("Dan", 123,5000);
shop.AddBook(b3);

console.log(shop.BoookWithMaxPages());
console.log(shop.GetBookById(2345));

