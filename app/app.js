import { changePage, loadData } from "../model/model.js";

function initListeners() {
    $("nav ul li a").on("click", (e) => {
        e.preventDefault();
        let btnId = e.currentTarget.id;
        changePage(btnId);

    })

    $("#loadDataBtn").on("click", (e) => {
        e.preventDefault();
        loadData("Haven", myReturnedData);
    })
}

function myReturnedData(data) {
    console.log("Data loaded:", data);
}

$(document).ready(() => {
    //changePage("home");
    initListeners();
})