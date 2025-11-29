"use client";

import { FaBolt, FaChartPie, FaCheckCircle } from "react-icons/fa";

export default function Features() {
  return (
    <section className="py-5 why-section" data-ao-group>
      <div className="container text-center ao-scroll">
        <h2 className="fw-bold mb-3">¿Por qué AO Insight Engine?</h2>
        <p className="text-muted mb-5 mx-auto" style={{ maxWidth: "650px" }}>
          Una herramienta diseñada para análisis empresariales profesionales,
          automatizados y listos para tomar decisiones reales.
        </p>

        <div className="row gy-4 justify-content-center">
          <div className="col-12 col-md-4">
            <div className="card info-card shadow-sm p-4 text-center rounded-4">
              <FaChartPie
                size={40}
                color="var(--ao-purple)"
                className="mb-3 card-img-top"
              />
              <h5 className="fw-bold mb-2">Diagnósticos Inteligentes</h5>
              <p className="text-muted small">
                Interpreta respuestas y genera conclusiones precisas con IA.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card info-card shadow-sm p-4 text-center rounded-4">
              <FaBolt
                size={40}
                color="var(--ao-pink)"
                className="mb-3 card-img-top "
              />
              <h5 className="fw-bold mb-2">Procesos Más Rápidos</h5>
              <p className="text-muted small">
                Automatiza evaluaciones que antes tomaban horas.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card info-card shadow-sm p-4 text-center rounded-4">
              <FaCheckCircle
                size={40}
                color="var(--ao-orange)"
                className="mb-3 card-img-top"
              />
              <h5 className="fw-bold mb-2">Decisiones con Datos</h5>
              <p className="text-muted small">
                Obtén métricas claras por área, módulo y score total.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
