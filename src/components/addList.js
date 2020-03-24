export class add {
    static addList(list) {
        const todoList = document.getElementById("todo-list");

        const label = document.createElement("label");
        label.innerHTML = list.value;
        label.className = "title";


        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.className = "delete";

        const listItem = document.createElement("li");
        listItem.className = "todo-item";

        listItem.appendChild(label);
        listItem.appendChild(deleteButton);

        const todoItem = listItem;
        todoList.appendChild(todoItem);
    }
}