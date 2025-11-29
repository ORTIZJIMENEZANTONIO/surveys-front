"use client";

import styles from "./Hero.module.scss";
import IconBulb from "@/components/landing/icons/IconBulb";
import IconGear from "@/components/landing/icons/IconGear";
import IconAnalytics from "@/components/landing/icons/IconAnalytics";

export default function Hero() {
  return (
    <>
      {/* HERO */}
      <section
        className={`${styles.heroFull} position-relative overflow-hidden`}
      >
        {/* Shapes */}
        <div className={`${styles.shape} ${styles.shape1}`}></div>
        <div className={`${styles.shape} ${styles.shape2}`}></div>
        <div className={`${styles.shape} ${styles.shape3}`}></div>

        <div className="container py-5">
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

      {/* FLOATING CARDS */}
      <section className={`${styles.heroCardsFloating}`} data-ao-group>
        <div className="container">
          <div className="row gy-4 justify-content-center">
            <div className="col-12 col-md-4 col-lg-3 ao-scroll">
              <div
                className={`${styles.featureCard} card shadow rounded-4 py-3 gap-3 text-center`}
              >
                <IconBulb className="mx-auto" />
                <div className="card-body">
                  <h5 className="fw-bold mb-1">Diagnóstico Empresarial</h5>
                  <p className="text-secondary small mb-0">
                    Automatizado en segundos
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 col-lg-3 ao-scroll">
              <div
                className={`${styles.featureCard} card shadow rounded-4 py-3 gap-3 text-center`}
              >
                <IconGear className="mx-auto" />
                <div className="card-body">
                  <h5 className="fw-bold mb-1">Procesos analizados</h5>
                  <p className="text-secondary small mb-0">
                    Validación completa
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 col-lg-3 ao-scroll">
              <div
                className={`${styles.featureCard} card shadow rounded-4 py-3 gap-3 text-center`}
              >
                <IconAnalytics className="mx-auto" />
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
