let myToDo = [];

let ui = {
    formField: $("field"),
}

function render(items) {
    for (let i = 0; i < items.length; i++) {
        let itemHTML = `
        <li data-pos="${i}" class="${items[i].done ? 'done' : ''}">
          <span class="toggle">${items[i].text}</span>
          <button class="delete">X</button>
        </li>
      `;
        $("#list").append(itemHTML)
    }
}
$("form").submit( (e)=> {
    e.preventDefault();
    let item = {
        text: "",
        done: false,
    }
    
    item.text = String(ui.formField.val());
    myToDo.push(item);
    render(myToDo);
});

render(myToDo);