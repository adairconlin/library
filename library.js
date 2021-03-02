let myLibrary = [];
let bookObj = {};

//store book info
function Book(title, author, pages) {
    bookObj.title = title,
    bookObj.author = author,
    bookObj.pages = pages,
    this.bookCard = function() {
        myLibrary.push(bookObj);
        bookObj = {};
        //remove possible duplicates
        if(myLibrary.length > 1) {
            myLibrary.shift();
        }

            //create book card display
        for(let i = 0; i < myLibrary.length; i++) {
            const card = document.createElement('div');
            card.className = "grid-item text";
            bookDisplay.appendChild(card);
            card.addEventListener("mouseover", function() {
                removeBtn.style.opacity = "100%";
            });
            card.addEventListener("mouseleave", function() {
                removeBtn.style.opacity = "0%";
            });
            
            const removeBtn = document.createElement('button');
            removeBtn.className = "removeBtn";
            removeBtn.textContent = "✕";
            removeBtn.onclick = function() {
                bookDisplay.removeChild(card);
            };
            card.appendChild(removeBtn);

            //needs to be optimized
            const tPara = document.createElement('p');
            const aPara = document.createElement('p');
            const pPara = document.createElement('p');
            const line = document.createElement('hr');
            tPara.textContent = myLibrary[i]["title"];
            aPara.textContent = "by " + myLibrary[i]["author"];
            pPara.textContent = myLibrary[i]["pages"] + " pages";
            tPara.className = "titlePara";
            card.appendChild(tPara);
            card.appendChild(aPara);
            card.appendChild(line);
            card.appendChild(pPara);
        }
    }
}

function addBookToLibrary() {
    //needs to be optimized
    userTitle = document.getElementById("bookTitle").value;
    userAuthor = document.getElementById("bookAuthor").value;
    userPages = document.getElementById("bookPage").value;

    if (userTitle.length > 0 && userAuthor.length > 0  && userPages.length > 0) {
        const newBook = new Book(userTitle, userAuthor, userPages);
        newBook.bookCard();
        //needs to be optimized
        document.getElementById("bookTitle").value = "";
        document.getElementById("bookAuthor").value = "";
        document.getElementById("bookPage").value = "";
    }
};


