const idArchivoConfiguracion="12gX2HPUuXtAIF7JGz78TR-uEL_VEOCdzJGWfLEAna58";
// Maneja peticiones HTTP GET
function doGet(e) {
  var respuesta = {
    status: "success",
    mensaje: "",
    data: {}
  };

  // Obtener el valor del parámetro 'accion'
  var accion = e.parameter.accion;
  respuesta.mensaje="Endpoint ["+accion+"] ejecutado correctamente.";
  // Lógica de enrutamiento
  
  switch (accion) {
    case 'ObtenerEstado':
      respuesta.data=ObtenerEstado();
      break;

    case 'ObtenerUsuarios':
      respuesta.data=ObtenerUsuarios();
      break;
      
    case 'ObtenerProductos':
      respuesta.data=ObtenerProductos();
      break;

    case 'ObtenerDatosBanner':
      respuesta.data=ObtenerDatosBanner();
      break;

    case 'ObtenerDatosCategoria':
      respuesta.data=ObtenerDatosCategoria();
      break;

    case 'ObtenerDatosFiltro':
      respuesta.data=ObtenerDatosFiltro();
      break;
      
    default:
      respuesta.status="failure";
      respuesta.mensaje="Endpoint "+accion+" no encontrado";
      break;
  }
  
  return RespuestaJson(respuesta);
}

// Maneja peticiones HTTP POST
function doPost(e) {
  var datosRecibidos;
  
  try {
    datosRecibidos = JSON.parse(e.postData.contents); // Parsea el cuerpo JSON enviado
  } catch(err) {
    datosRecibidos = "No se envió un JSON válido o body vacío";
  }

  var respuesta = {
    status: "success",
    mensaje: "Datos procesados correctamente",
    datos_guardados: datosRecibidos
  };

  return RespuestaJson(respuesta);
}

// Función auxiliar para formatear la respuesta
function RespuestaJson(objeto) {
  return ContentService
    .createTextOutput(JSON.stringify(objeto))
    .setMimeType(ContentService.MimeType.JSON);
}

// Funciones individuales para cada endpoint
function ObtenerEstado() {
  var data = "API Funcionando correctamente";
  return data;
}

function ObtenerUsuarios() {
  var data = { usuarios: ["Ana", "Luis", "Carlos"] };
  return data;
}

function ObtenerProductos() {
  var data = { productos: ["Laptop", "Mouse", "Teclado"] };
  return data;
}

function ObtenerDatosBanner() {
    const sheet = SpreadsheetApp.openById(idArchivoConfiguracion)
                                .getSheetByName('Banner');
    const filas = sheet.getDataRange().getValues();
    return filas.slice(1).map(fila => ({ titulo: fila[0], pagina: fila[1] }));
}

function ObtenerDatosCategoria() {
    const sheet = SpreadsheetApp.openById(idArchivoConfiguracion)
                                .getSheetByName('Categorias');
    const filas = sheet.getDataRange().getValues();
    return filas.slice(1).map(fila => ({ Id: fila[0], Nombre: fila[1], Emoji: fila[2], Pagina: fila[3] }));
}

function ObtenerDatosFiltro() {
    const sheet = SpreadsheetApp.openById(idArchivoConfiguracion)
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



