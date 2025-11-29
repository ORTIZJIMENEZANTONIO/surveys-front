"use client";

export default function ZigZag() {
  return (
    <section className="container py-5">
      <div className="row justify-content-center text-center">
        <div className="col-lg-10 p-5 rounded-4 ao-section-highlight">
          <h3 className="fw-bold text-dark mb-3 animate-fade-in">
            Evaluación Empresarial Completa
          </h3>

          <p className="text-secondary animate-fade-in delay-2">
            14 módulos diseñados para evaluar áreas críticas de cualquier tipo
            de negocio.
          </p>

          <div className="d-flex justify-content-center gap-4 flex-wrap mt-4">
            <span className="ao-chip">Diagnósticos en minutos</span>
            <span className="ao-chip">Análisis automático con IA</span>
            <span className="ao-chip">Recomendaciones accionables</span>
          </div>
        </div>
      </div>
    </section>
  );
}
