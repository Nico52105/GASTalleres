function ObtenerDatosCategoria() {
  const sheet = SpreadsheetApp.openById(idArchivoConfiguracion)
    .getSheetByName('Categorias');
  const filas = sheet.getDataRange().getValues();

  return filas.slice(1).map(fila => ({
    Id: fila[0],
    Nombre: fila[1],
    Emoji: fila[2],
    Pagina: fila[3]
  }));
}
