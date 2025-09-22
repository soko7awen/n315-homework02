export async function changePage(pageName) {
    try {
        const response = await fetch(`pages/${pageName}.html`);
        if (!response.ok) throw new Error('Page not found');
        
        const html = await response.text();
        $("#app").html(html);
    } catch (error) {
        $("#app").html(`<p>Error loading page: ${error.message}</p>`);
    }
}

export async function loadName(caller, callback) {
    let apiURL = "https://fantasyname.lukewh.com/?ancestry=e&family=t";
    let response = await fetch(apiURL);
    let newName = await response.text();

    callback(caller, newName);
}