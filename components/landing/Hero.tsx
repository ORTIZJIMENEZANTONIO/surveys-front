"use client";

import IconBulb from "./icons/IconBulb";
import IconGear from "./icons/IconGear";
import IconAnalytics from "./icons/IconAnalytics";

export default function Hero() {
  return (
    <>
      {/* HERO FULL WIDTH */}
      <section className="hero-full text-center position-relative overflow-hidden ">
        {/* Gradient shapes */}
        <div className="ao-shape ao-shape-1"></div>
        <div className="ao-shape ao-shape-2"></div>
        <div className="ao-shape ao-shape-3"></div>

        <div className="container py-5 hero-inner">
          <span className="ao-badge d-inline-block mb-3">Powered by AI</span>

          <h1 className="display-3 fw-bold text-white mb-3">
            AO Insight Engine
          </h1>

          <p
            className="lead text-white-50 mx-auto mb-4"
            style={{ maxWidth: "720px" }}
          >
            Convierte respuestas en diagnósticos inteligentes impulsados por IA.
          </p>

          <button className="btn btn-light btn-lg mb-3">Comenzar ahora</button>
        </div>
      </section>

      {/* FLOATING CARDS — OUTSIDE THE HERO */}
      <section className="hero-cards-floating" data-ao-group>
        <div className="container">
          <div className="row gy-4 justify-content-center">
            <div className="col-12 col-md-4 col-lg-3 ao-scroll">
              <div className="card shadow rounded-4 feature-card py-3 gap-3 text-center">
                <IconBulb className="card-img-top mx-auto" />
                <div className="card-body">
                  <h5 className="fw-bold mb-1">Diagnóstico Empresarial</h5>
                  <p className="text-secondary small mb-0">
                    Automatizado en segundos
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 col-lg-3 ao-scroll">
              <div className="card shadow rounded-4 feature-card py-3 gap-3 text-center">
                <IconGear className="card-img-top mx-auto" />
                <div className="card-body">
                  <h5 className="fw-bold mb-1">Procesos analizados</h5>
                  <p className="text-secondary small mb-0">
                    Validación completa
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 col-lg-3 ao-scroll">
              <div className="card shadow rounded-4 feature-card py-3 gap-3 text-center">
                <IconAnalytics className="card-img-top mx-auto" />
                <div className="card-body">
                  <h5 className="fw-bold mb-1">Recomendaciones con IA</h5>
                  <p className="text-secondary small mb-0">
                    Análisis automatizado
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
