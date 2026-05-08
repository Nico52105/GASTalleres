function doGet(e){
    let page = e.parameter.pag || 'Index';
    return HtmlService.createTemplateFromFile('Paginas/' + page).evaluate().setTitle(page);
}

function getWebAppUrl() {
    return ScriptApp.getService().getUrl();
}

