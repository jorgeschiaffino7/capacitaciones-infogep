# Estructura de la Google Sheet - Formulario de Capacitación

## Columnas de la Hoja de Cálculo

La aplicación guarda los datos en Google Sheets en el siguiente orden (43 columnas):

### Columna A - Metadata
1. **Timestamp** - Fecha y hora de envío (ISO format)

### Sección 1: Información General (Columnas B-G)
2. **Título** - Título de la capacitación
3. **Tipo** - Tipo de actividad (Curso/Taller/Seminario/Conferencia/Otro)
4. **Tipo Otro** - Especificación si seleccionó "Otro"
5. **Descripción** - Breve descripción (2-3 líneas)
6. **Objetivo General** - Objetivo general de la capacitación
7. **Área Temática** - Área temática o eje institucional

### Sección 2: Datos Organizativos (Columnas H-K)
8. **Organismo Organizador** - Organismo o institución organizadora
9. **Equipo Responsable** - Equipo o referentes responsables
10. **Docentes** - Docentes/disertantes/facilitadores
11. **Contacto Institucional** - Correo o teléfono de contacto

### Sección 3: Información Logística (Columnas L-Q)
12. **Modalidad** - Presencial/Virtual/Híbrida
13. **Lugar** - Lugar (si es presencial)
14. **Fechas y Horarios** - Fecha(s) y horario(s)
15. **Duración Total** - Duración total en horas
16. **Cupo** - Cupo máximo de participantes
17. **Destinatarios** - Público al que se dirige

### Sección 4: Comunicación y Difusión (Columnas R-W)
18. **Fecha Difusión** - Fecha sugerida para iniciar la difusión
19. **Canales** - Canales solicitados (separados por comas)
20. **Canal Otro** - Especificación de otro canal
21. **Logos** - Logos institucionales para el flyer
22. **Material Gráfico** - Imágenes o material gráfico sugerido
23. **Responsable Diseño** - Persona responsable de aprobar el diseño

### Sección 5: Formulario de Inscripción (Columnas X-AB)
24. **Requiere Inscripción** - Sí/No
25. **Datos Participante** - Datos a solicitar (separados por comas)
26. **Dato Otro** - Especificación de otro dato
27. **Fecha Límite Inscripción** - Fecha límite de inscripción
28. **Link Formulario** - Link del formulario (si ya existe)

### Sección 6: Requerimientos Técnicos (Columnas AC-AQ)
29. **Cantidad Sillas** - Cantidad de sillas disponibles
30. **Mesas Apoyo** - Mesas de apoyo para computadoras (Sí/No)
31. **PC Facilitador** - PC disponible para el facilitador (Sí/No)
32. **Pantalla** - Pantalla o TV para proyección (Sí/No)
33. **Sonido** - Sistema de sonido (Sí/No)
34. **Micrófonos** - Micrófonos disponibles (Sí/No)
35. **Requerimientos Técnicos** - Otros requerimientos (separados por comas)
36. **Plataforma Virtual** - Plataforma utilizada (Zoom, Meet, Teams, etc.)
37. **Enlace Acceso** - Enlace de acceso configurado (Sí/No)
38. **Cámara Funcional** - Cámara y micrófono funcionales (Sí/No)
39. **Grabación** - Grabación o transmisión (Sí/No)
40. **Soporte Técnico** - Soporte técnico disponible (Sí/No)

### Sección 7: Observaciones (Columna AQ)
41. **Observaciones** - Observaciones adicionales

## Encabezados Sugeridos para la Primera Fila

Se recomienda agregar manualmente estos encabezados en la primera fila de tu Google Sheet:

```
Timestamp | Título | Tipo | Tipo Otro | Descripción | Objetivo General | Área Temática | Organismo Organizador | Equipo Responsable | Docentes | Contacto Institucional | Modalidad | Lugar | Fechas y Horarios | Duración Total | Cupo | Destinatarios | Fecha Difusión | Canales | Canal Otro | Logos | Material Gráfico | Responsable Diseño | Requiere Inscripción | Datos Participante | Dato Otro | Fecha Límite Inscripción | Link Formulario | Cantidad Sillas | Mesas Apoyo | PC Facilitador | Pantalla | Sonido | Micrófonos | Requerimientos Técnicos | Plataforma Virtual | Enlace Acceso | Cámara Funcional | Grabación | Soporte Técnico | Observaciones
```

## Campos con Múltiples Valores

Los siguientes campos pueden contener múltiples valores separados por comas:
- **Canales** (columna S)
- **Datos Participante** (columna Y)
- **Requerimientos Técnicos** (columna AH)

## Campos Condicionales

Algunos campos solo aparecen dependiendo de las selecciones:
- **Lugar**: Solo si modalidad es "Presencial" o "Híbrida"
- **Plataforma Virtual y relacionados**: Solo si modalidad es "Virtual" o "Híbrida"
- **Campos de inscripción detallados**: Solo si "Requiere Inscripción" es "Sí"
