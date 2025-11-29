"use client";

import styles from "./SurveyModules.module.scss";

export default function ModulesSection() {
  const modules = [
    {
      id: 1,
      title: "Dirección y Organización",
      time: "10 min",
      status: "completed",
      progress: 100,
      showResults: true,
    },
    {
      id: 2,
      title: "Procesos Operativos",
      time: "10 min",
      status: "in-progress",
      progress: 40,
      showResults: false,
    },
    {
      id: 3,
      title: "Ventas",
      time: "10 min",
      status: "completed",
      progress: 100,
      showResults: true,
    },
    {
      id: 4,
      title: "Marketing",
      time: "10 min",
      status: "completed",
      progress: 100,
      showResults: true,
    },
    {
      id: 5,
      title: "Finanzas",
      time: "10 min",
      status: "not-started",
      progress: 0,
      showResults: false,
    },
    {
      id: 6,
      title: "Talento",
      time: "10 min",
      status: "not-started",
      progress: 0,
      showResults: false,
    },
    {
      id: 7,
      title: "Legal y Cumplimiento",
      time: "10 min",
      status: "not-started",
      progress: 0,
      showResults: false,
    },
    {
      id: 8,
      title: "Tecnología",
      time: "10 min",
      status: "completed",
      progress: 100,
      showResults: true,
    },
    {
      id: 9,
      title: "Atención al Cliente",
      time: "10 min",
      status: "not-started",
      progress: 50,
      showResults: false,
    },
    {
      id: 10,
      title: "Producto / Servicio",
      time: "10 min",
      status: "not-started",
      progress: 0,
      showResults: false,
    },
    {
      id: 11,
      title: "Logística",
      time: "10 min",
      status: "not-started",
      progress: 0,
      showResults: false,
    },
    {
      id: 12,
      title: "Compras y Proveedores",
      time: "10 min",
      status: "not-started",
      progress: 0,
      showResults: false,
    },
    {
      id: 13,
      title: "Planeación Estratégica",
      time: "10 min",
      status: "completed",
      progress: 100,
      showResults: true,
    },
    {
      id: 14,
      title: "Datos y Analytics",
      time: "10 min",
      status: "completed",
      progress: 100,
      showResults: true,
    },
  ];

  const getStatus = (s: string) => {
    if (s === "completed") return styles.completed;
    if (s === "in-progress") return styles.inProgress;
    return styles.notStarted;
  };

  return (
    <section className="py-5 bg-light" data-ao-group>
      <div className="container">
        <h2 className="fw-bold text-center mb-4 ao-scroll">
          Módulos del diagnóstico
        </h2>

        <div className="row">
          {modules.map((mod) => (
            <div
              key={mod.id}
              className="col-12 col-md-6 col-lg-4 ao-scroll visible mb-2"
            >
              <div
                className={`${styles.moduleCard}`}
                style={
                  { "--progress": `${mod.progress}%` } as React.CSSProperties
                }
              >
                <div className="row g-0 w-100">
                  <div className="col-4 col-md-3">
                    <div className={`${styles.icon} ${getStatus(mod.status)}`}>
                      {mod.status === "completed" ? "✓" : mod.id}
                    </div>
                  </div>

                  <div className="col-8 col-md-9">
                    <div className="card-body" style={{ flexGrow: 1 }}>
                      <h5 className="fw-bold card-title">{mod.title}</h5>
                      <div className="text-muted small">⏱ {mod.time}</div>

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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
