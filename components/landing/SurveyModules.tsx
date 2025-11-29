"use client";

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
      progress: 0,
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

  const getStatusClass = (status: string) => {
    switch (status) {
      case "completed":
        return "ao-module-completed";
      case "in-progress":
        return "ao-module-in-progress";
      default:
        return "ao-module-not-started";
    }
  };

  return (
    <section className="py-5 bg-light" data-ao-group>
      <div className="container">
        <h2 className="fw-bold text-center mb-4">Módulos del diagnóstico</h2>

        <div className="row gy-4">
          {modules.map((mod) => (
            <div className="col-12 col-md-6 col-lg-4" key={mod.id}>
              <div
                className="ao-module-card ao-scroll"
                style={
                  { "--progress": `${mod.progress}%` } as React.CSSProperties
                }
              >
                {/* Left icon */}
                <div className={`ao-module-icon ${getStatusClass(mod.status)}`}>
                  {mod.status === "completed" ? "✓" : mod.id}
                </div>

                {/* Middle content */}
                <div className="ao-module-info" style={{ flexGrow: 1 }}>
                  <h5>{mod.title}</h5>
                  <div className="ao-module-meta">⏱ {mod.time}</div>

                  {/* PROGRESS BAR */}
                  <div className="ao-progress-container">
                    <div className="ao-progress-fill"></div>
                  </div>
                </div>

                {/* Right side — results */}
                <div className="ao-module-right">
                  {mod.showResults && (
                    <a href="#" className="ao-results-link">
                      Ver resultados
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
