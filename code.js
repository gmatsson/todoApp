let myToDo = [];

let ui = {
    formField: $("#field"),
}

function render(items) {
    $("#list").empty();
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
        text: String(ui.formField.val()),
        done: false,
    }
    myToDo.push(item);
    render(myToDo);
});
$("#list").on('click', '.delete', (event) => {
    let pos = $(event.target).closest('li').attr('data-pos');
    myToDo.splice(pos, 1);
    render(myToDo);
});

$(".toggle").on('click', () => {
    
});
