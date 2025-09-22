import { changePage, loadName } from "../model/model.js";

function initListeners() {
    $("nav ul li a").on("click", (e) => {
        e.preventDefault();
        let btnId = e.currentTarget.id;
        changePage(btnId);

    })

    $("#app").on("click", "#loadNameBtn", function (e) {
        e.preventDefault();
        loadName(this, printName);
    });
    }

function printName(caller, newName) {
    if ($("#printedName")) {
        $("#printedName").remove()
    }
    let space = document.createElement("span");
    space.innerHTML = "&nbsp;&nbsp;";
    caller.insertAdjacentElement("afterend", space);
    let p = document.createElement("p");
    p.id = "printedName";
    p.innerHTML = newName;
    space.insertAdjacentElement("afterend", p);
}

$(document).ready(() => {
    changePage("home");
    initListeners();
})