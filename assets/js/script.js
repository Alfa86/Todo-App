const addTodo = document.querySelector(".add-todo");
addTodo.addEventListener("click", addNew);
document.querySelector(".add-todo").addEventListener('keyup', e => {
  if (e.keyCode === 13) {
    addNew();
  }
});
function addNew() {
  const inputElement = document.querySelector(".new-item-add");
  const text = inputElement.value.trim();

  if (text !== undefined && text.length > 0) {
    const ul = document.querySelector(".todo__items--container");

    const li = document.createElement("li");
    const checkBox = document.createElement("input");
    const checkmark = document.createElement("div");
    const label = document.createElement("label");
    const closeButton = document.createElement("button");

    label.innerText = text;
    const labelText = label;
    labelText.classList.add("container");
    checkmark.classList.add("checkmark");
    checkmark.innerHTML = `<span class="icon-ok"></span>`;
    closeButton.classList.add("close--button");
    checkBox.classList.add("check-box-input");

    closeButton.innerHTML = `<span class="icon-trash"></span>`;
    checkBox.setAttribute("type", "checkbox");
    closeButton.addEventListener("click", removeItem);
    checkBox.addEventListener('click', itemDone);
    
    labelText.prepend(checkmark, checkBox);
    li.append(labelText, closeButton);
    li.classList.add("todo__items--item");
    ul.appendChild(li);
  }
  inputElement.value = "";
}
function itemDone(event) {
  const item = event.target;
  item.parentNode.classList.toggle('done');
}	
function removeItem(event) {
  const removeButton = event.target;
  removeButton.parentNode.parentNode.remove();
}