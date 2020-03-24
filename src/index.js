import {Search} from "./components/app";
const url = "https://asdf-48dbf.firebaseio.com/post.json";
const user = {};


main();

function main() {
    const data = new Search(url);
    data.Gettodo();
}



document.querySelector("#add-button").addEventListener("submit", function (e) {
    e.preventDefault();

    user.value = element.addInput.value;

    const search = new Search(url);

    search.Createtodo(user);
});


