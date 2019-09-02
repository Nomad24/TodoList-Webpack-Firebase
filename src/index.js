import {Search} from "./components/app";
import {element} from "./components/elements";
const url = "https://asdf-48dbf.firebaseio.com/post.json";
const user = {};


function main() {
    const data = new Search(url);
    data.Gettodo();
}

main();




element.btn.addEventListener("submit", function (e) {
    e.preventDefault();

    user.value = element.addInput.value;

    const search = new Search(url);

    search.Createtodo(user);
});


