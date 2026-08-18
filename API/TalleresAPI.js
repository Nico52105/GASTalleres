const idArchivoConfiguracion="12gX2HPUuXtAIF7JGz78TR-uEL_VEOCdzJGWfLEAna58";

function doGet(e) {
  var accion = ObtenerAccion(e);
  return RespuestaJson(EjecutarEndpoint(accion));
}

function doPost(e) {
  var accion = ObtenerAccion(e);
  var datosRecibidos = ObtenerDatosPost(e);

  if (!accion) {
    return RespuestaJson({
      status: "failure",
      mensaje: "No se recibió la acción en la petición POST",
      data: {}
    });
  }

  try {
    var respuesta = EjecutarEndpoint(accion, datosRecibidos);
    return RespuestaJson(respuesta);
  } catch (error) {
    return RespuestaJson({
      status: "failure",
      mensaje: "Error al procesar la acción [" + accion + "]: " + error.message,
      data: {}
    });
  }
}

function DefinirEndpoints() {
  return {
    ObtenerEstado: ObtenerEstado,
    ObtenerUsuarios: ObtenerUsuarios,
    ObtenerProductos: ObtenerProductos,
    ObtenerDatosBanner: ObtenerDatosBanner,
    ObtenerDatosCategoria: ObtenerDatosCategoria,
    ObtenerDatosFiltro: ObtenerDatosFiltro
  };
}

function ObtenerAccion(e) {
  if (!e) {
    return "";
  }

  var accion = "";

  if (e.parameter && e.parameter.accion) {
    accion = e.parameter.accion;
  }

  if (!accion && e.postData && e.postData.contents) {
    try {
      var datos = JSON.parse(e.postData.contents);
      if (datos && (datos.accion || datos.action)) {
        accion = datos.accion || datos.action;
      }
    } catch (error) {
      accion = "";
    }
  }

  return (accion || "").trim();
}

function ObtenerDatosPost(e) {
  if (!e || !e.postData || !e.postData.contents) {
    return {};
  }

  try {
    return JSON.parse(e.postData.contents);
  } catch (error) {
    return {};
  }
}

function EjecutarEndpoint(accion, payload) {
  var endpoints = DefinirEndpoints();
  var handler = endpoints[accion];

  if (!accion) {
    return {
      status: "failure",
      mensaje: "La acción es obligatoria",
      data: {}
    };
  }

  if (!handler) {
    return {
      status: "failure",
      mensaje: "Endpoint [" + accion + "] no encontrado",
      data: {}
    };
  }

  try {
    var resultado = handler(payload);
    return {
      status: "success",
      mensaje: "Endpoint [" + accion + "] ejecutado correctamente.",
      data: resultado
    };
  } catch (error) {
    return {
      status: "failure",
      mensaje: "Error ejecutando [" + accion + "]: " + error.message,
      data: {}
    };
  }
}

// Función auxiliar para formatear la respuesta
function RespuestaJson(objeto) {
  return ContentService
    .createTextOutput(JSON.stringify(objeto))
    .setMimeType(ContentService.MimeType.JSON);
}



