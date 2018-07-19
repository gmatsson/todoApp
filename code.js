let myToDo = [];

let item = {
    text: "",
    done: false,
}

let itemHTML = `
  <li data-pos="${i}" class="${item[i].done ? 'done' : ''}">
    <span class="toggle">${item[i].text}</span>
    <button class="delete">X</button>
  </li>
`;

function render (myToDo){
    for(let i in myToDo){
        $("#list").append(itemHTML)
    }
}