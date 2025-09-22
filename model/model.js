const homePage = `<h1>Home Page</h1><p>Welcome to the Home Page!`;
const aboutPage = `<h1>About Page</h1><p>Welcome to the About Page!`;
const productsPage = `<h1>Products Page</h1><p>Welcome to the Products Page!`;
const contactUsPage = `<h1>Contact Us Page</h1><p>Welcome to the Contact Us Page!`;


export function changePage(pageName) {
    let navID = pageName + "Page";
    $("#app").html(eval(navID));
}

export function loadData(fName, callback) {
    let newName = fName + " Smith";
    callback(newName);
}