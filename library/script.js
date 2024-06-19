// library application (*Understand and solve in english Overview first, (what the app should do and basic steps* then create pseudocode, then write code.)
/*  
  The app takes user-inputted books and store them and display them on the page in cards.
  A button allows us to add books manually with author, title, pages, read-status,
  in a popup form. the book cards allow us to delete each book and change its read status.

  Pseudocode (construct program algorithm in precise steps to solve the task):
  1. create library array to store book objects
  2. create Book constructor with book properties
  3. create function that takes user input creates object and puts it into book array
  4. create function that loops through book array and displays each book on page.
  5. add "new book" button that brings up form allowing input for author, title, pages, read status. use modal dialog tag, preventDefault action.
  6. Add button on card display to remove book from library array.
  7. Add button on display to toggle read status, 
    need a function that toggles books read status on your Book prototype instance.

  Now translate this into Code to implement the program algorithm.
  
  Now you have a real plan so writing code is much easier! 
  you won't stare blankly into the screen and cry.
  you'll still get stuck on things but you'll have a plan to make steady progress and you can look up what you don't know. Google is your friend as a developer.
  keep in mind you don't have to be perfect, there are an infinite # of ways to solve problems. Your solution may be different and that's fine! patterns and techniques will improve overtime. writing code likes this makes collaboration easy, just say what step you are working on.

*/

let myLibrary = [
  { author: "Stephen King", title: "The Shining", pages: "344", read: "yes" },
];
const container = document.getElementById("container");
const showBtn = document.getElementById("showButton");

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function getInputAndPush() {
  let author = document.getElementById("author");
  let title = document.getElementById("title");
  let pages = document.getElementById("pages");
  let read = document.getElementById("read");
  let readValue;
  if (read.checked) {
    read.value = "yes";
    readValue = read.value;
  } else {
    read.value = "no";
    readValue = read.value;
  }

  let book = new Book(author.value, title.value, pages.value, readValue);
  myLibrary.push(book);
}

function displayBook(bookArray) {
  container.innerHTML = "";
  for (let book of bookArray) {
    let card = document.createElement("div");
    let h1 = document.createElement("h2");
    let h2 = document.createElement("h2");
    let h3 = document.createElement("h2");
    let input = document.createElement("input");
    let cardBtn = document.createElement("button");
    let toggleBtn = document.createElement("button");
    cardBtn.textContent = "remove";
    toggleBtn.textContent = "read?";
    h1.textContent = book.author;
    h2.textContent = book.title;
    h3.textContent = book.pages;

    if (book.read === "yes") {
      input.style.cssText = "background-color: green; color: white";
      input.value = "Read";
      console.log(input);
    } else {
      input.style.cssText = "background-color: red; color: white";
      input.value = "Not Read";
      console.log(input);
    }

    card.appendChild(h1);
    card.appendChild(h2);
    card.appendChild(h3);
    card.appendChild(input);
    card.appendChild(cardBtn);
    card.appendChild(toggleBtn);

    container.appendChild(card);
    cardBtn.addEventListener("click", (e) => {
      e.target.parentNode.remove();
      let indexBook = myLibrary.indexOf(book);
      console.log(indexBook);
      myLibrary.splice(indexBook, 1);
    });

    toggleBtn.addEventListener("click", () => {
      const currentColor = input.style.backgroundColor;

      if (currentColor === "green") {
        input.style.backgroundColor = "red";
        input.value = "Not Read";
      } else {
        // Assuming initial state is not green
        input.style.backgroundColor = "green";
        input.value = "Read";
      }
    });
  }
}

let dialog = document.getElementById("modalForm");
showBtn.addEventListener("click", () => {
  dialog.showModal();
});

// button inside the modal form
let addBtn = document.getElementById("add");
addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    author.value !== null &&
    title.value !== null &&
    pages.value !== null
    // read.value !== null
  ) {
    getInputAndPush();
    console.log(myLibrary);
    dialog.close();
    displayBook(myLibrary);
  }
});

// keepGoing = true;
// while (keepGoing) {}

//Functions in JavaScript form closures. A closure refers to the combination of a function and the surrounding state in which the function was declared.
