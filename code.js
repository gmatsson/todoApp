let myToDo = [
    {
        text: "hej",
        done: false,
    },
    {
        text: "där",
        done: false,
    }
];

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

render(myToDo);