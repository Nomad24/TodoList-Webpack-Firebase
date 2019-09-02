export const clickhandle = function (query) {
    const close = document.querySelectorAll(".delete");
    for (let i = 0; i < close.length; i++) {
        const list = query[i];
        close[i].addEventListener("click", function () {
            var p_dom = this.parentNode;
            var parent_node = p_dom.parentNode;
            parent_node.removeChild(p_dom);
            firebase.database().ref("post/" + list.id).remove();
        })
    }
}

export const addhandle = function (query) {
    const close = document.getElementsByTagName("ul")[0].lastChild;
    const list = query;
    close.addEventListener("click", function () {
        var p_dom = this.parentNode;
        p_dom.removeChild(close);
        firebase.database().ref("post/" + list).remove();
    })
}
