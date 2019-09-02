export class add {
    static addList(list) {
        const todoList = document.getElementById("todo-list");
        //const checkbox = document.createElement("input");
        //checkbox.type = "checkbox";
        //checkbox.className = "checkbox";

        const label = document.createElement("label");
        label.innerHTML = list.value;
        label.className = "title";

        //const editInput = document.createElement("input");
        //editInput.type = "text";
        //editInput.className = "textfield";

        //const editButton = document.createElement("button");
        //editButton.innerHTML = "Change";
        //editButton.className = "edit";

        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.className = "delete";

        const listItem = document.createElement("li");
        listItem.className = "todo-item";

        //listItem.appendChild(checkbox);
        listItem.appendChild(label);
        //listItem.appendChild(editInput);
        //listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);

        const todoItem = listItem;
        todoList.appendChild(todoItem);
    }
}