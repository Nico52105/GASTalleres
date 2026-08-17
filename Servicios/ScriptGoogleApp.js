function doGet(e){
    let page = e.parameter.pag || 'Index';
    return HtmlService.createTemplateFromFile('Paginas/' + page).evaluate().setTitle(page);
}

function getWebAppUrl() {
    return ScriptApp.getService().getUrl();
}

function ObtenerDatosBannerGS() {
    const sheet = SpreadsheetApp.openById('12gX2HPUuXtAIF7JGz78TR-uEL_VEOCdzJGWfLEAna58')
                                .getSheetByName('Banner');
    const filas = sheet.getDataRange().getValues();
    return filas.slice(1).map(fila => ({ titulo: fila[0], pagina: fila[1] }));
}

function ObtenerDatosCategoriaGS() {
    const sheet = SpreadsheetApp.openById('12gX2HPUuXtAIF7JGz78TR-uEL_VEOCdzJGWfLEAna58')
                                .getSheetByName('Categorias');
    const filas = sheet.getDataRange().getValues();
    return filas.slice(1).map(fila => ({ Id: fila[0], Nombre: fila[1], Emoji: fila[2], Pagina: fila[3] }));
}

function ObtenerDatosFiltroGS() {
    const sheet = SpreadsheetApp.openById('12gX2HPUuXtAIF7JGz78TR-uEL_VEOCdzJGWfLEAna58')
                                .getSheetByName('Filtros');
    const filas = sheet.getDataRange().getValues();    
    const items = {};
    for (let i = 1; i < filas.length; i++) {
        const [Orden,Filtro, titulo, control, opciones] = filas[i];
        items[Filtro] = {
            Orden,
            titulo,
            control,
            opciones: opciones ? opciones.split(',') : []
        };
    }
    return items;
}


