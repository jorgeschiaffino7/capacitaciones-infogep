import { google } from "googleapis";

export async function saveToSheet(data) {
  if (!process.env.GOOGLE_CLIENT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY) {
    throw new Error("Faltan las variables de entorno GOOGLE_CLIENT_EMAIL o GOOGLE_PRIVATE_KEY");
  }

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.SPREADSHEET_ID,
    range: "A1",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [[
        // Metadata
        new Date().toISOString(),
        
        // 1. Información General
        data.titulo || "",
        data.tipo || "",
        data.tipoOtro || "",
        data.descripcion || "",
        data.objetivoGeneral || "",
        data.areaTematica || "",
        
        // 2. Datos Organizativos
        data.organismoOrganizador || "",
        data.equipoResponsable || "",
        data.docentes || "",
        data.contactoInstitucional || "",
        
        // 3. Información Logística
        data.modalidad || "",
        data.lugar || "",
        data.fechasHorarios || "",
        data.duracionTotal || "",
        data.cupo || "",
        data.destinatarios || "",
        
        // 4. Comunicación y Difusión
        data.fechaDifusion || "",
        Array.isArray(data.canales) ? data.canales.join(", ") : "",
        data.canalOtro || "",
        data.logos || "",
        data.materialGrafico || "",
        data.responsableDiseno || "",
        
        // 5. Formulario de Inscripción
        data.requiereInscripcion || "",
        Array.isArray(data.datosParticipante) ? data.datosParticipante.join(", ") : "",
        data.datoOtro || "",
        data.fechaLimiteInscripcion || "",
        data.linkFormulario || "",
        
        // 6. Requerimientos Técnicos
        data.cantidadSillas || "",
        data.mesasApoyo || "",
        data.pcFacilitador || "",
        data.pantalla || "",
        data.sonido || "",
        data.microfonos || "",
        Array.isArray(data.requerimientosTecnicos) ? data.requerimientosTecnicos.join(", ") : "",
        data.plataformaVirtual || "",
        data.enlaceAcceso || "",
        data.camaraFuncional || "",
        data.grabacion || "",
        data.soporteTecnico || "",
        
        // 7. Observaciones
        data.observaciones || ""
      ]],
    },
  });
}
