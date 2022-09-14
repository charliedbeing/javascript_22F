var Book = function(id,title,author,genre,pageCount,publisherID,ISBN,checkoutDate,checkoutMember,dueReturnDate,availability){
this.id= id;
this.title = title;
this.author= author,
this.genre = genre;
this.pageCount= pageCount;
this.publisherID= publisherID;
this.ISBN = ISBN;
this.checkoutDate= checkoutDate;
this.checkoutMember = checkoutMember;
this.dueReturnDate= dueReturnDate;
this.availability= availability;
}

Book.prototype={
    getTitle:function(){
        return this.title;
    },
    getAuthor:function(){
        return this.author;
    },
    updateCheckoutStatus:function(bookID,newStatus,checkoutDate,checkoutMember,newReturnDate){
        this.id = bookID;
        this.availability= newStatus;
        this.checkoutDate = checkoutDate;
        this.checkoutMember = checkoutMember;
        this.newReturnDate = newReturnDate;
    },
    extendCheckoutPeroid:function(bookID,newReturnDate){
        this.id = bookID;
        this.dueReturnDate = newReturnDate;
    },
    isPastDue:function(bookID){
        var currentDate = new Date();
        return currentDate.getTime()> Date.parse(this.dueReturnDate);
    }
}

var bookStore =(function(){
    var books={};
    var records={};

    var init = function(){
        for(var i=0;i<1000;i++){
            var b= new Book(i);
            books[i]=b;
        }
    }

    return {
        updateCheckoutStatus:function(bookID){
            var book = books[bookId]
            book.updateCheckoutStatus(bookID)
        }
    }
})()

/**
 * Flyweight upgrade
 */

 function Book2 (title,author,genre,pageCount,publisherID,ISBN){
    this.id=  Book2.prototype.count;
    this.title = title;
    this.author= author,
    this.genre = genre;
    this.pageCount= pageCount;
    this.publisherID= publisherID;
    this.ISBN = ISBN;

    Book2.prototype.count +=1;
}

Book2.prototype.count= 0;


var BookFactory = (function(){
    var existingBooks ={};

    return {
        createBook:function(title,author,genre,pageCount,publisherID,ISBN){
            var existingBook = existingBooks[ISBN]
            if( existingBook){
                return existingBook
            }else{
                var book = new Book2(title,author,genre,pageCount,publisherID,ISBN);
                existingBooks[ISBN] = book;
                return book;
            }
        },
        searchBook:function(ISBN){
            return existingBooks[ISBN];
        }

    }

})()

var BookRecordManager = (function(){

    var bookRecordDatabase={};
    var booksInventoryDatabase={};

    var bookInvertoryIDCount =0;
    var bookRecordIDCount=0;

    return {
        addBook:function(title,author,genre,pageCount,publisherID,ISBN){

            var book = BookFactory.createBook(title,author,genre,pageCount,publisherID,ISBN)

            booksInventoryDatabase[bookInvertoryIDCount] ={
                book:book,
                storageDate:new Date().toISOString,
                Readingtype:'in store', // out store,
            }

            return this;
        },

        addBookRecord:function(
            ISBN,newStatus,checkoutDate,checkoutMember,newReturnDate){
            var book = BookFactory.searchBook(ISBN);
            bookRecordDatabase[bookRecordIDCount] = {
                checkoutMember,
                checkoutDate,
                dueReturnDate,
                availability,
                book,

            }
            bookRecordIDCount +=1;
        },

        updateCheckoutStatus : function(recordID,newStatus,checkoutDate,checkoutMember,newReturnDate){
            var record = bookRecordDatabase[recordID];
            record.availability =newStatus;
            record.checkoutMember = checkoutMember;
            record.dueReturnDate = newReturnDate;
            record.checkoutDate = checkoutDate;
        },

        isPastDue:function(recordID){
            var record = bookRecordDatabase[recordID];
            var currentDate = new Date();
            return currentDate.getTime()> Date.parse(record.dueReturnDate)
        }

    }
})()





