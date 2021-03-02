let myLibrary = [];
let bookObj = {};

function Book(title, author, pages) {
    bookObj.title = title,
    bookObj.author = author,
    bookObj.pages = pages,
    this.bookCard = function() {
        myLibrary.push(bookObj);
        bookObj = {};
        if(myLibrary.length > 1) {
            myLibrary.shift();
        }

        for(let i = 0; i < myLibrary.length; i++) {
            const card = document.createElement('div');
            card.className = "bookCard";
            bookDisplay.appendChild(card);
            
            const removeBtn = document.createElement('button');
            removeBtn.className = "removeBtn";
            removeBtn.textContent = "X";
            removeBtn.onclick = function() {
                bookDisplay.removeChild(card);
            };
            card.appendChild(removeBtn);

            const tPara = document.createElement('p');
            const aPara = document.createElement('p');
            const pPara = document.createElement('p');
            tPara.textContent = "Title: " + myLibrary[i]["title"];
            aPara.textContent = "Author: " + myLibrary[i]["author"];
            pPara.textContent = "Pages: " + myLibrary[i]["pages"];
            card.appendChild(tPara);
            card.appendChild(aPara);
            card.appendChild(pPara);
        }
    }
}

function addBookToLibrary() {
    userTitle = document.getElementById("bookTitle").value;
    userAuthor = document.getElementById("bookAuthor").value;
    userPages = document.getElementById("bookPage").value;
    const newBook = new Book(userTitle, userAuthor, userPages);
    newBook.bookCard();
    document.getElementById("bookTitle").value = "";
    document.getElementById("bookAuthor").value = "";
    document.getElementById("bookPage").value = "";
};


