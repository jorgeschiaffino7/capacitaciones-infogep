import { useState } from "react";
import { submitForm } from "../services/api";

export default function FormCapacitacion() {
  const [form, setForm] = useState({
    // 1. Información general
    titulo: "",
    tipo: "",
    tipoOtro: "",
    descripcion: "",
    objetivoGeneral: "",
    areaTematica: "",
    
    // 2. Datos organizativos
    organismoOrganizador: "",
    equipoResponsable: "",
    docentes: "",
    contactoInstitucional: "",
    
    // 3. Información logística
    modalidad: "",
    lugar: "",
    fechasHorarios: "",
    duracionTotal: "",
    cupo: "",
    destinatarios: "",
    
    // 4. Comunicación y difusión
    fechaDifusion: "",
    canales: [],
    canalOtro: "",
    logos: "",
    materialGrafico: "",
    responsableDiseno: "",
    
    // 5. Formulario de inscripción
    requiereInscripcion: "",
    datosParticipante: [],
    datoOtro: "",
    fechaLimiteInscripcion: "",
    linkFormulario: "",
    
    // 6. Requerimientos técnicos
    cantidadSillas: "",
    mesasApoyo: "",
    pcFacilitador: "",
    pantalla: "",
    sonido: "",
    microfonos: "",
    requerimientosTecnicos: [],
    plataformaVirtual: "",
    enlaceAcceso: "",
    camaraFuncional: "",
    grabacion: "",
    soporteTecnico: "",
    
    // 7. Observaciones
    observaciones: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCheckbox = (e) => {
    const { name, value, checked } = e.target;
    if (checked) {
      setForm({ ...form, [name]: [...(form[name] || []), value] });
    } else {
      setForm({ ...form, [name]: form[name].filter(item => item !== value) });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await submitForm(form);
      alert("Formulario enviado exitosamente");
      window.location.reload();
    } catch (error) {
      alert("Error al enviar el formulario");
    } finally {
      setIsSubmitting(false);
    }
  };

  const sections = [
    { num: 1, title: "Información General" },
    { num: 2, title: "Datos Organizativos" },
    { num: 3, title: "Información Logística" },
    { num: 4, title: "Comunicación" },
    { num: 5, title: "Inscripción" },
    { num: 6, title: "Req. Técnicos" },
    { num: 7, title: "Observaciones" },
  ];

  return (
    <div className="min-h-screen py-8 px-4 md:py-12 md:px-6">
      {/* Header */}
      <header className="max-w-5xl mx-auto mb-10 text-center animate-slide-up">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
          <span className="text-white text-sm font-medium tracking-wide">Sistema de Gestión de Capacitaciones</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
          Solicitud de Capacitación
        </h1>
        
        <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Complete el formulario para gestionar su solicitud. Los campos marcados con 
          <span className="text-cyan-400 font-semibold"> (*) </span> 
          son obligatorios.
        </p>

        {/* Progress indicator */}
        <div className="hidden lg:flex justify-center gap-2 mt-8">
          {sections.map((section) => (
            <div key={section.num} className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-slate-700/50 border border-slate-600/50 flex items-center justify-center text-slate-400 text-sm font-medium hover:border-cyan-500/50 hover:text-cyan-400 transition-all cursor-default">
                {section.num}
              </div>
              {section.num < 7 && <div className="w-8 h-px bg-slate-700"></div>}
            </div>
          ))}
        </div>
      </header>

      {/* Form */}
      <form onSubmit={handleSubmit} className="max-w-5xl mx-auto space-y-16">
        
        {/* 1. Información General */}
        <section className="glass-section rounded-2xl p-8 md:p-10 animate-slide-up stagger-1">
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-white">Información General</h2>
            <p className="text-slate-500 text-sm mt-1">Datos básicos de la capacitación</p>
          </div>
          
          <div className="space-y-7">
            <div>
              <label className="block font-medium mb-3 text-slate-300">
                Título de la capacitación <span className="text-cyan-400">*</span>
              </label>
              <input
                required
                name="titulo"
                value={form.titulo}
                onChange={handleChange}
                placeholder="Ingrese el título de la capacitación"
                className="input-field w-full p-4 rounded-xl"
              />
            </div>

            <div>
              <label className="block font-medium mb-3 text-slate-300">
                Tipo de actividad <span className="text-cyan-400">*</span>
              </label>
              <div className="flex flex-wrap gap-3">
                {["Curso", "Taller", "Seminario", "Conferencia"].map(tipo => (
                  <label key={tipo} className="option-card flex items-center gap-3 px-5 py-3 rounded-xl cursor-pointer">
                    <input
                      type="radio"
                      name="tipo"
                      value={tipo}
                      checked={form.tipo === tipo}
                      onChange={handleChange}
                      required
                    />
                    <span className="font-medium text-slate-300">{tipo}</span>
                  </label>
                ))}
                <label className="option-card flex items-center gap-3 px-5 py-3 rounded-xl cursor-pointer">
                  <input
                    type="radio"
                    name="tipo"
                    value="Otro"
                    checked={form.tipo === "Otro"}
                    onChange={handleChange}
                  />
                  <span className="font-medium text-slate-300">Otro</span>
                </label>
              </div>
              {form.tipo === "Otro" && (
                <input
                  name="tipoOtro"
                  value={form.tipoOtro}
                  onChange={handleChange}
                  placeholder="Especificar tipo de actividad"
                  className="input-field w-full md:w-1/2 p-3 rounded-xl mt-3 conditional-section"
                />
              )}
            </div>

            <div>
              <label className="block font-medium mb-3 text-slate-300">
                Breve descripción <span className="text-cyan-400">*</span>
              </label>
              <textarea
                required
                name="descripcion"
                value={form.descripcion}
                onChange={handleChange}
                rows="3"
                placeholder="Describa brevemente la capacitación (2-3 líneas)..."
                className="input-field w-full p-4 rounded-xl resize-none"
              />
            </div>

            <div>
              <label className="block font-medium mb-3 text-slate-300">
                Objetivo general <span className="text-cyan-400">*</span>
              </label>
              <textarea
                required
                name="objetivoGeneral"
                value={form.objetivoGeneral}
                onChange={handleChange}
                rows="3"
                placeholder="¿Cuál es el objetivo principal de esta capacitación?"
                className="input-field w-full p-4 rounded-xl resize-none"
              />
            </div>

            <div>
              <label className="block font-medium mb-3 text-slate-300">
                Área temática o eje institucional
              </label>
              <input
                name="areaTematica"
                value={form.areaTematica}
                onChange={handleChange}
                placeholder="Ej: Tecnología, Administración, Salud..."
                className="input-field w-full p-4 rounded-xl"
              />
            </div>
          </div>
        </section>

        {/* 2. Datos Organizativos */}
        <section className="glass-section rounded-2xl p-8 md:p-10 animate-slide-up stagger-2">
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-white">Datos Organizativos</h2>
            <p className="text-slate-500 text-sm mt-1">Información del equipo responsable</p>
          </div>
          
          <div className="space-y-7">
            <div>
              <label className="block font-medium mb-3 text-slate-300">
                Organismo o institución organizadora <span className="text-cyan-400">*</span>
              </label>
              <input
                required
                name="organismoOrganizador"
                value={form.organismoOrganizador}
                onChange={handleChange}
                placeholder="Nombre del organismo o institución"
                className="input-field w-full p-4 rounded-xl"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block font-medium mb-3 text-slate-300">
                  Equipo o referentes responsables
                </label>
                <input
                  name="equipoResponsable"
                  value={form.equipoResponsable}
                  onChange={handleChange}
                  placeholder="Nombres de los responsables"
                  className="input-field w-full p-4 rounded-xl"
                />
              </div>

              <div>
                <label className="block font-medium mb-3 text-slate-300">
                  Docentes / disertantes / facilitadores
                </label>
                <input
                  name="docentes"
                  value={form.docentes}
                  onChange={handleChange}
                  placeholder="Nombres de los docentes"
                  className="input-field w-full p-4 rounded-xl"
                />
              </div>
            </div>

            <div>
              <label className="block font-medium mb-3 text-slate-300">
                Contacto institucional <span className="text-cyan-400">*</span>
              </label>
              <input
                required
                name="contactoInstitucional"
                value={form.contactoInstitucional}
                onChange={handleChange}
                placeholder="correo@institucion.gob.ar o (351) 123-4567"
                className="input-field w-full p-4 rounded-xl"
              />
            </div>
          </div>
        </section>

        {/* 3. Información Logística */}
        <section className="glass-section rounded-2xl p-8 md:p-10 animate-slide-up stagger-3">
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-white">Información Logística</h2>
            <p className="text-slate-500 text-sm mt-1">Modalidad, fechas y ubicación</p>
          </div>
          
          <div className="space-y-7">
            <div>
              <label className="block font-medium mb-3 text-slate-300">
                Modalidad <span className="text-cyan-400">*</span>
              </label>
              <div className="grid grid-cols-3 gap-3">
                {["Presencial", "Virtual", "Híbrida"].map(modalidad => (
                  <label key={modalidad} className="option-card flex items-center justify-center gap-3 px-4 py-4 rounded-xl cursor-pointer text-center">
                    <input
                      type="radio"
                      name="modalidad"
                      value={modalidad}
                      checked={form.modalidad === modalidad}
                      onChange={handleChange}
                      required
                      className="sr-only"
                    />
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-2xl">
                        {modalidad === "Presencial" && "🏛️"}
                        {modalidad === "Virtual" && "💻"}
                        {modalidad === "Híbrida" && "🔄"}
                      </span>
                      <span className="font-medium text-slate-300">{modalidad}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {(form.modalidad === "Presencial" || form.modalidad === "Híbrida") && (
              <div className="p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/20 conditional-section">
                <label className="block font-medium mb-3 text-slate-300">
                  📍 Lugar
                </label>
                <input
                  name="lugar"
                  value={form.lugar}
                  onChange={handleChange}
                  placeholder="Dirección o nombre del lugar"
                  className="input-field w-full p-4 rounded-xl"
                />
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block font-medium mb-3 text-slate-300">
                  Fecha(s) y horario(s) <span className="text-cyan-400">*</span>
                </label>
                <input
                  required
                  name="fechasHorarios"
                  value={form.fechasHorarios}
                  onChange={handleChange}
                  placeholder="Ej: 15/03/2026 de 9:00 a 13:00hs"
                  className="input-field w-full p-4 rounded-xl"
                />
              </div>

              <div>
                <label className="block font-medium mb-3 text-slate-300">
                  Duración total (horas)
                </label>
                <input
                  type="number"
                  name="duracionTotal"
                  value={form.duracionTotal}
                  onChange={handleChange}
                  placeholder="Ej: 8"
                  className="input-field w-full p-4 rounded-xl"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block font-medium mb-3 text-slate-300">
                  Cupo máximo de participantes
                </label>
                <input
                  type="number"
                  name="cupo"
                  value={form.cupo}
                  onChange={handleChange}
                  placeholder="Ej: 30"
                  className="input-field w-full p-4 rounded-xl"
                />
              </div>

              <div>
                <label className="block font-medium mb-3 text-slate-300">
                  Destinatarios
                </label>
                <input
                  name="destinatarios"
                  value={form.destinatarios}
                  onChange={handleChange}
                  placeholder="Ej: Empleados públicos, Estudiantes..."
                  className="input-field w-full p-4 rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 4. Comunicación y Difusión */}
        <section className="glass-section rounded-2xl p-8 md:p-10 animate-slide-up stagger-4">
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-white">Comunicación y Difusión</h2>
            <p className="text-slate-500 text-sm mt-1">Canales y materiales de difusión</p>
          </div>
          
          <div className="space-y-7">
            <div>
              <label className="block font-medium mb-3 text-slate-300">
                Fecha sugerida para iniciar la difusión
              </label>
              <input
                type="date"
                name="fechaDifusion"
                value={form.fechaDifusion}
                onChange={handleChange}
                className="input-field w-full md:w-1/2 p-4 rounded-xl"
              />
            </div>

            <div>
              <label className="block font-medium mb-3 text-slate-300">
                Canales solicitados
              </label>
              <div className="grid md:grid-cols-2 gap-3">
                {["Sitio web", "Redes sociales", "Canal de WhatsApp", "Correo institucional"].map(canal => (
                  <label key={canal} className="option-card flex items-center gap-3 p-4 rounded-xl cursor-pointer">
                    <input
                      type="checkbox"
                      name="canales"
                      value={canal}
                      checked={form.canales.includes(canal)}
                      onChange={handleCheckbox}
                    />
                    <span className="font-medium text-slate-300">{canal}</span>
                  </label>
                ))}
                <label className="option-card flex items-center gap-3 p-4 rounded-xl cursor-pointer md:col-span-2">
                  <input
                    type="checkbox"
                    name="canales"
                    value="Otro"
                    checked={form.canales.includes("Otro")}
                    onChange={handleCheckbox}
                  />
                  <span className="font-medium text-slate-300">Otro:</span>
                  {form.canales.includes("Otro") && (
                    <input
                      name="canalOtro"
                      value={form.canalOtro}
                      onChange={handleChange}
                      placeholder="Especificar canal"
                      className="input-field flex-1 p-2 rounded-lg"
                    />
                  )}
                </label>
              </div>
            </div>

            <div>
              <label className="block font-medium mb-3 text-slate-300">
                Logos institucionales para el flyer
              </label>
              <textarea
                name="logos"
                value={form.logos}
                onChange={handleChange}
                rows="2"
                placeholder="Indique qué logos deben aparecer..."
                className="input-field w-full p-4 rounded-xl resize-none"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block font-medium mb-3 text-slate-300">
                  Material gráfico sugerido
                </label>
                <textarea
                  name="materialGrafico"
                  value={form.materialGrafico}
                  onChange={handleChange}
                  rows="2"
                  placeholder="Describa o indique enlaces..."
                  className="input-field w-full p-4 rounded-xl resize-none"
                />
              </div>

              <div>
                <label className="block font-medium mb-3 text-slate-300">
                  Responsable de aprobar el diseño
                </label>
                <input
                  name="responsableDiseno"
                  value={form.responsableDiseno}
                  onChange={handleChange}
                  placeholder="Nombre del responsable"
                  className="input-field w-full p-4 rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 5. Formulario de Inscripción */}
        <section className="glass-section rounded-2xl p-8 md:p-10 animate-slide-up stagger-5">
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-white">Formulario de Inscripción</h2>
            <p className="text-slate-500 text-sm mt-1">Configuración del registro de participantes</p>
          </div>
          
          <div className="space-y-7">
            <div>
              <label className="block font-medium mb-3 text-slate-300">
                ¿Requiere formulario de inscripción?
              </label>
              <div className="flex gap-4">
                {["Sí", "No"].map(opcion => (
                  <label key={opcion} className="option-card flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-xl cursor-pointer">
                    <input
                      type="radio"
                      name="requiereInscripcion"
                      value={opcion}
                      checked={form.requiereInscripcion === opcion}
                      onChange={handleChange}
                    />
                    <span className="font-medium text-slate-300 text-lg">{opcion}</span>
                  </label>
                ))}
              </div>
            </div>

            {form.requiereInscripcion === "Sí" && (
              <div className="p-5 rounded-xl bg-cyan-500/5 border border-cyan-500/20 space-y-5 conditional-section">
                <div>
                  <label className="block font-medium mb-3 text-slate-300">
                    Datos que deben solicitarse al participante
                  </label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {["Nombre y apellido", "DNI", "Organismo", "Correo electrónico", "Teléfono"].map(dato => (
                      <label key={dato} className="option-card flex items-center gap-3 p-3 rounded-xl cursor-pointer">
                        <input
                          type="checkbox"
                          name="datosParticipante"
                          value={dato}
                          checked={form.datosParticipante.includes(dato)}
                          onChange={handleCheckbox}
                        />
                        <span className="font-medium text-slate-300">{dato}</span>
                      </label>
                    ))}
                    <label className="option-card flex items-center gap-3 p-3 rounded-xl cursor-pointer md:col-span-2">
                      <input
                        type="checkbox"
                        name="datosParticipante"
                        value="Otro"
                        checked={form.datosParticipante.includes("Otro")}
                        onChange={handleCheckbox}
                      />
                      <span className="font-medium text-slate-300">Otro:</span>
                      {form.datosParticipante.includes("Otro") && (
                        <input
                          name="datoOtro"
                          value={form.datoOtro}
                          onChange={handleChange}
                          placeholder="Especificar dato"
                          className="input-field flex-1 p-2 rounded-lg"
                        />
                      )}
                    </label>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-medium mb-3 text-slate-300">
                      Fecha límite de inscripción
                    </label>
                    <input
                      type="date"
                      name="fechaLimiteInscripcion"
                      value={form.fechaLimiteInscripcion}
                      onChange={handleChange}
                      className="input-field w-full p-4 rounded-xl"
                    />
                  </div>

                  <div>
                    <label className="block font-medium mb-3 text-slate-300">
                      Link del formulario (si existe)
                    </label>
                    <input
                      type="url"
                      name="linkFormulario"
                      value={form.linkFormulario}
                      onChange={handleChange}
                      placeholder="https://forms.google.com/..."
                      className="input-field w-full p-4 rounded-xl"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 6. Requerimientos Técnicos */}
        <section className="glass-section rounded-2xl p-8 md:p-10 animate-slide-up stagger-6">
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-white">Requerimientos Técnicos</h2>
            <p className="text-slate-500 text-sm mt-1">Infraestructura y equipamiento necesario</p>
          </div>
          
          <div className="space-y-7">
            {(form.modalidad === "Presencial" || form.modalidad === "Híbrida") && (
              <div className="p-5 rounded-xl bg-slate-800/50 border border-slate-700/50 space-y-5 conditional-section">
                <h3 className="font-bold text-lg text-cyan-400 flex items-center gap-2">
                  🏛️ Infraestructura Presencial
                </h3>
                
                <div>
                  <label className="block font-medium mb-3 text-slate-300">
                    Cantidad de sillas disponibles
                  </label>
                  <input
                    type="number"
                    name="cantidadSillas"
                    value={form.cantidadSillas}
                    onChange={handleChange}
                    placeholder="Ej: 50"
                    className="input-field w-full md:w-1/3 p-4 rounded-xl"
                  />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                  {[
                    { name: "mesasApoyo", label: "Mesas de apoyo" },
                    { name: "pcFacilitador", label: "PC para facilitador" },
                    { name: "pantalla", label: "Pantalla/TV" },
                    { name: "sonido", label: "Sistema de sonido" },
                    { name: "microfonos", label: "Micrófonos" },
                  ].map(item => (
                    <div key={item.name} className="p-4 rounded-xl bg-slate-900/50 border border-slate-700/50">
                      <label className="block font-medium mb-3 text-slate-400 text-sm">
                        {item.label}
                      </label>
                      <div className="flex gap-3">
                        {["Sí", "No"].map(opcion => (
                          <label key={opcion} className="flex items-center gap-1.5 cursor-pointer">
                            <input
                              type="radio"
                              name={item.name}
                              value={opcion}
                              checked={form[item.name] === opcion}
                              onChange={handleChange}
                            />
                            <span className="text-slate-300 text-sm">{opcion}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div>
              <label className="block font-medium mb-3 text-slate-300">
                Otros requerimientos técnicos
              </label>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  "Wi-Fi o conexión estable a internet",
                  "Cables o adaptadores (HDMI / VGA)",
                  "Puntero láser o control remoto",
                  "Extensiones eléctricas / zapatillas",
                  "Aire acondicionado o ventilación",
                  "Accesibilidad para movilidad reducida"
                ].map(req => (
                  <label key={req} className="option-card flex items-center gap-3 p-3 rounded-xl cursor-pointer">
                    <input
                      type="checkbox"
                      name="requerimientosTecnicos"
                      value={req}
                      checked={form.requerimientosTecnicos.includes(req)}
                      onChange={handleCheckbox}
                    />
                    <span className="font-medium text-slate-300 text-sm">{req}</span>
                  </label>
                ))}
              </div>
            </div>

            {(form.modalidad === "Virtual" || form.modalidad === "Híbrida") && (
              <div className="p-5 rounded-xl bg-slate-800/50 border border-slate-700/50 space-y-5 conditional-section">
                <h3 className="font-bold text-lg text-cyan-400 flex items-center gap-2">
                  💻 Modalidad Virtual
                </h3>
                
                <div>
                  <label className="block font-medium mb-3 text-slate-300">
                    Plataforma utilizada
                  </label>
                  <input
                    name="plataformaVirtual"
                    value={form.plataformaVirtual}
                    onChange={handleChange}
                    placeholder="Ej: Zoom, Google Meet, Microsoft Teams"
                    className="input-field w-full p-4 rounded-xl"
                  />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { name: "enlaceAcceso", label: "Enlace configurado" },
                    { name: "camaraFuncional", label: "Cámara/Mic funcionales" },
                    { name: "grabacion", label: "Grabación/transmisión" },
                    { name: "soporteTecnico", label: "Soporte técnico" },
                  ].map(item => (
                    <div key={item.name} className="p-4 rounded-xl bg-slate-900/50 border border-slate-700/50">
                      <label className="block font-medium mb-3 text-slate-400 text-sm">
                        {item.label}
                      </label>
                      <div className="flex gap-3">
                        {["Sí", "No"].map(opcion => (
                          <label key={opcion} className="flex items-center gap-1.5 cursor-pointer">
                            <input
                              type="radio"
                              name={item.name}
                              value={opcion}
                              checked={form[item.name] === opcion}
                              onChange={handleChange}
                            />
                            <span className="text-slate-300 text-sm">{opcion}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 7. Observaciones Adicionales */}
        <section className="glass-section rounded-2xl p-8 md:p-10 animate-slide-up stagger-7">
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-white">Observaciones Adicionales</h2>
            <p className="text-slate-500 text-sm mt-1">Comentarios o información extra</p>
          </div>
          
          <div>
            <label className="block font-medium mb-3 text-slate-300">
              Comentarios u observaciones <span className="text-slate-500 text-sm">(opcional)</span>
            </label>
            <textarea
              name="observaciones"
              value={form.observaciones}
              onChange={handleChange}
              rows="5"
              placeholder="Agregue cualquier información adicional que considere relevante para la organización de esta capacitación..."
              className="input-field w-full p-4 rounded-xl resize-none"
            />
          </div>
        </section>

        {/* Submit Button */}
        <div className="flex flex-col items-center gap-4 pt-4 pb-8 animate-slide-up stagger-7">
          <button
            type="submit"
            disabled={isSubmitting}
            className="submit-btn text-white font-semibold px-8 py-3 rounded-xl text-base shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-3">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                </svg>
                Enviando...
              </span>
            ) : (
              <span className="flex items-center justify-center gap-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Enviar Solicitud
              </span>
            )}
          </button>
          <p className="text-sm text-white text-center">
            Al enviar, los datos se guardarán en la planilla institucional
          </p>
        </div>
      </form>

      {/* Footer decoration */}
      <div className="max-w-5xl mx-auto mt-8 pt-8 border-t border-slate-800/50 text-center">
        <p className="text-white text-sm">
          Sistema de Gestión de Capacitaciones • InfoGEP
        </p>
      </div>
    </div>
  );
}
