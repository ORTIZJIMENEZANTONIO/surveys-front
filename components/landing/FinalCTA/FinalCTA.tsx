"use client";

import styles from "./FinalCTA.module.scss";

export default function FinalCTA() {
  return (
    <section
      className={`${styles.finalCta} container-fluid px-0 rounded-0`}
      data-ao-group
    >
      <div className="p-5 text-center">
        <h2 className="fw-bold text-white mb-3 ao-scroll">
          ¿Listo para transformar tu análisis empresarial?
        </h2>

        <p className="text-white-50 mb-4 ao-scroll">
          AO Insight Engine convierte datos en estrategias accionables.
        </p>

        <button className="btn btn-light btn-lg px-4 fw-bold ao-scroll">
          Integrar ahora
        </button>
      </div>
    </section>
  );
}
