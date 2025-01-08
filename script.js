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

function printLibrary(bookObject) {
  const book = document.createElement("div");
  book.setAttribute("class", "book");
  for (const key in bookObject) {
    const para = document.createElement("p");
    const spanKey = document.createElement("span");
    spanKey.innerText = key;
    para.appendChild(spanKey);
    const spanValley = document.createElement("span");
    spanValley.innerText = bookObject[key];
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

for (let i = 0; i < myLibrary.length; i++) {
  printLibrary(myLibrary[i]);
}

const addButton = document.querySelector(".addButton");
addButton.addEventListener("click", () => {
  const newBook = new Book(
    document.querySelector("#title").value,
    document.querySelector("#author").value,
    document.querySelector("#pages").valueAsNumber,
    document.querySelector("input[name='read']:checked").value
  );

  myLibrary.push(newBook);
  printLibrary(newBook);
});

function Book(title, author, pages, read) {
  this.Title = title;
  this.Author = author;
  this["Number of pages"] = pages;
  this.Read = read;
}

function addBookToLibrary() {
  // do stuff here
}

//Add a button on each book’s display to remove the book from the library

//Add a button on each book’s display to change its read status
