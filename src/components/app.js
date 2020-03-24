import {TransformService} from "./transform.service";
import {add} from "./addList";
import * as handlerbtn from './handlerbtn';
export class Search {
    constructor(query) {
        this.query = query;
    }

    Createtodo(user) {
        axios.post(this.query, JSON.stringify(user))
            .then(function (response) {
                console.log(response);
                add.addList(user);
                //element.addInput.value = "";
                document.querySelector("#add-input").value = "";
                handlerbtn.addhandle(response.data.name);
            })
            .catch(function (error) {
                alert(error);
            })
    }

    Gettodo() {
        axios.get(this.query)
            .then(function (response) {
                const fbData = response.data;
                const todolist = TransformService.fbObjectToArray(fbData);
                todolist.forEach(function (list) {
                    add.addList(list);
                });
                handlerbtn.clickhandle(todolist);
            })
            .catch(function (error) {
                alert(error);
            })
    }
}