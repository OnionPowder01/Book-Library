let myLibrary = [];
let i = 0;

//Constructor

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.ShowContent = function () {
    return ` Book title: ${this.title} Author: ${this.author}\nNumber of pages: ${this.pages}`;
  };
}

function ShowBook() {
  const element = document.createElement("div");
  const p = document.createElement("p");
  const btn = document.createElement("button");
  const btnRemove = document.createElement("button");

  output = "";
  output += myLibrary[i].ShowContent() + "; ";

  element.classList.add(`BookClass`);
  p.innerHTML = output;

  //Remove Button
  btnRemove.classList.add('btn-text');
  btnRemove.classList.add('btn');
  btnRemove.classList.add('btns');
  btnRemove.innerText = "Delete";
  btnRemove.addEventListener("click", function RemoveBook() {
    element.outerHTML = "";
  });

  //Read Button
  btn.classList.add('btn-text');
  btn.classList.add('btn');
  btn.classList.add('btns');
  btn.innerText = "Not Read Yet";
  btn.addEventListener("click", function ReadClick() {
    btn.textContent = "Read";
    btn.style.backgroundColor = "green";
    btn.style.color = "white";
  });

  element.append(p);
  element.append(btn);
  element.append(btnRemove);
  document.querySelector(".books-container").append(element);

  i++;
}

function addNewBook() {
  let book = new Book(
    document.getElementById("title").value,
    document.getElementById("author").value,
    document.getElementById("pages").value
  );
  myLibrary.push(book);
  ShowBook();
}
