function ObtenerDatosFiltro() {
  const sheet = SpreadsheetApp.openById(idArchivoConfiguracion)
    .getSheetByName('Filtros');
  const filas = sheet.getDataRange().getValues();
  const items = {};

  for (let i = 1; i < filas.length; i++) {
    const [Orden, Filtro, titulo, control, opciones] = filas[i];
    items[Filtro] = {
      Orden,
      titulo,
      control,
      opciones: opciones ? opciones.split(',') : []
    };
  }

  return items;
}
