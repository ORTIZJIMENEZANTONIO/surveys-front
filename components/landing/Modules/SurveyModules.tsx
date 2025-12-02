"use client";

import styles from "./SurveyModules.module.scss";
import { useSurvey } from "@/hooks/useSurvey";
import Link from "next/link";

export default function ModulesSection() {
  const { surveys, loading, error } = useSurvey();

  const getStatus = (s: string) => {
    if (s === "completed") return styles.completed;
    if (s === "in-progress") return styles.inProgress;
    return styles.notStarted;
  };

  return (
    <section className="py-5 bg-light" data-ao-group>
      <div className="container">
        <h2 className="fw-bold text-center mb-4 ao-scroll">Módulos</h2>
        {loading ? (
          <div className="text-center mb-4 ao-scroll">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="row">
            {surveys.map((mod) => (
              <div
                key={mod.id}
                className={`col-12 col-md-6 col-lg-4 ao-scroll mb-2 ${styles.moduleWrapper}`}
              >
                {error && <div className="alert alert-danger">{error}</div>}

                <Link href={`/survey/${mod.id}`} className={styles.cardLink}>
                  <div
                    className={`${styles.moduleCard}`}
                    style={
                      {
                        "--progress": `${mod.progress ?? 0}%`,
                      } as React.CSSProperties
                    }
                  >
                    <div className="row g-0 w-100">
                      <div className="col-4 col-md-3">
                        <div
                          className={`${styles.icon} ${getStatus(mod.status)}`}
                        >
                          {mod.status === "completed" ? "✓" : mod.id}
                        </div>
                      </div>

                      <div className="col-8 col-md-9">
                        <div className="card-body" style={{ flexGrow: 1 }}>
                          <h5 className="fw-bold card-title">{mod.name}</h5>
                          <div className="text-muted small">⏱ {0}</div>

                          <div className={styles.progressContainer}>
                            <div className={styles.progressFill}></div>
                          </div>
                        </div>

                        <div>
                          {mod.showResults && (
                            <a href="#" className={styles.resultsLink}>
                              Ver resultados
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
