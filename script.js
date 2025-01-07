const myLibrary = [
  {
    Title: "Under the hood",
    Author: "Jan Jackie",
    "Number of pages": 125,
    Read: "Yes",
  },
  {
    Title: "Under the hood",
    Author: "Jan Jackie",
    "Number of pages": 225,
    Read: "Yes",
  },
  {
    Title: "Under the hood",
    Author: "Jan Jackie",
    "Number of pages": 325,
    Read: "Yes",
  },
  {
    Title: "Under the hood",
    Author: "Jan Jackie",
    "Number of pages": 425,
    Read: "Yes",
  },
];

const librarySection = document.querySelector("section");

function printLibrary() {
  for (let i = 0; i < myLibrary.length; i++) {
    const book = document.createElement("div");
    book.setAttribute("class", "book");
    for (const key in myLibrary[i]) {
      const para = document.createElement("p");
      const spanKey = document.createElement("span");
      spanKey.innerText = key;
      para.appendChild(spanKey);
      const spanValley = document.createElement("span");
      spanValley.innerText = myLibrary[i][key];
      para.appendChild(spanValley);
      book.appendChild(para);
    }

    const changeButton = document.createElement("button");
    changeButton.setAttribute("type", "button");
    changeButton.innerText = "Change read status";
    book.appendChild(changeButton);

    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("type", "button");
    deleteButton.innerText = "Delete";
    book.appendChild(deleteButton);

    librarySection.appendChild(book);
  }
}

printLibrary();

const addButton = document.querySelector(".addButton");

addButton.addEventListener("click", () => {
  const newBook = {};
  newBook.Title = document.querySelector("#title").value;
  newBook.Author = document.querySelector("#author").value;
  newBook["Number of pages"] = document.querySelector("#pages").valueAsNumber;
  newBook.Read = document.querySelector("input[name='read']:checked").value;
  myLibrary.push(newBook);
});

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}

//Write a function that loops through the array and displays each book on the page.
//for first steps myLibrary should contain some books

//Add a “New Book” button that brings up a form allowing users to input the details for the new book and add it to the library: author, title, number of pages, whether it’s been read and anything else you might want.

//Add a button on each book’s display to remove the book from the library

//Add a button on each book’s display to change its read status
