document.querySelector(".add-todo").addEventListener("click", addNew);
function addNew() {
  let inputElement = document.querySelector(".new-item-add");
  let text = inputElement.value.trim();

  if (text !== undefined && text.length > 0) {
    let ul = document.querySelector(".todo__items--container");

    const li = document.createElement("li");
    const checkBox = document.createElement("input");
    const checkmark = document.createElement("span");
    const label = document.createElement("label");
    const closeButton = document.createElement("button");
    label.innerText = text;
    let labelText = label;
    labelText.classList.add("container");
    checkmark.classList.add("checkmark");
    closeButton.classList.add("close--button");
    checkBox.classList.add("check-box-input");
    closeButton.innerText = "X";
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("onclick", "itemDone()");
    ul.appendChild(li);
    labelText.append(checkBox, checkmark);
    li.append(labelText, closeButton);
    li.classList.add("todo__items--item");
  }
  inputElement.value = "";
}
// function itemDone() {
//   var checkBox = document.getElementsByClassName("check-box-input");
//   console.log(checkBox);
//   var text = document.getElementsByClassName("container");
//   if (checkBox.checked == true) {
//     text.style.textDecoration = "line-through";
//   } else {
//     text.style.textDecoration = "none";
//   }
// }

/*(function() {
  "use strict";
  function Todo() {
    var containerDiv = document.createElement("div");
    var input = document.querySelector("input#add-todo"),
      addButton = document.querySelector(".add-todo"),
      list = document.querySelector(".todo__items--container");

    function markDone(event) {
      var item = event.target;
      item.parentNode.classList.toggle("done");
    }

    function removeItem(event) {
      var removeButton = event.target;
      removeButton.parentNode.remove();
    }

    function addRemoveButton(item) {
      var removeButton = document.createElement("div");

      removeButton.className = "close--button";
      removeButton.addEventListener("click", removeItem);
      item.appendChild(removeButton);
    }

    function addCheckbox(item) {
      var checkbox = document.createElement("input");

      checkbox.setAttribute("type", "checkbox");
      checkbox.addEventListener("click", markDone);
      item.insertBefore(checkbox, item.firstChild);
    }

    function createItem(text) {
      var item = document.createElement("li");
      item.innerText = text;
      addRemoveButton(item);
      addCheckbox(item);
      return item;
    }

    function addItem(event) {
      var text = input.value;
      let item = createItem(text);
      list.appendChild(item);
      input.value = "";
    }

    this.addListeners = function() {
      addButton.addEventListener("click", addItem);
    };
  }

  Todo.prototype.init = function() {
    this.addListeners();
  };

  var todo = new Todo();
  window.addEventListener("load", todo.init());
})();
*/
