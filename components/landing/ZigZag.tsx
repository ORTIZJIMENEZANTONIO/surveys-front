"use client";

export default function ZigZag() {
  return (
    <section className="py-5 zigzag-section bg-light" data-ao-group>
      <div className="container">
        <div className="row align-items-center justify-content-center text-center">
          <div className="col-lg-8 ao-scroll">
            <h2 className="fw-bold mb-3">Evaluación Empresarial Completa</h2>

            <p
              className="text-muted mb-4 mx-auto"
              style={{ maxWidth: "700px" }}
            >
              Más de 14 módulos diseñados para evaluar procesos, dirección,
              ventas, finanzas, talento, tecnología y más.
            </p>

            <div className="d-flex flex-wrap justify-content-center gap-3">
              <span className="ao-chip">Diagnósticos en minutos</span>
              <span className="ao-chip">IA para análisis avanzado</span>
              <span className="ao-chip">Recomendaciones personalizadas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
