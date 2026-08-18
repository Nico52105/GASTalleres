function ObtenerDatosBanner() {
  const sheet = SpreadsheetApp.openById(idArchivoConfiguracion)
    .getSheetByName('Banner');
  const filas = sheet.getDataRange().getValues();

  return filas.slice(1).map(fila => ({
    titulo: fila[0],
    pagina: fila[1]
  }));
}
