"use client";

export default function ModulesSection() {
  const modules = [
    "Dirección y Organización",
    "Procesos Operativos",
    "Ventas",
    "Marketing",
    "Finanzas",
    "Talento",
    "Legal y Cumplimiento",
    "Tecnología",
    "Atención al Cliente",
    "Producto / Servicio",
    "Logística",
    "Compras y Proveedores",
    "Planeación Estratégica",
    "Datos y Analytics",
  ];

  return (
    <section className="container py-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold text-dark">Módulos del Diagnóstico</h2>
        <p className="text-secondary">
          14 áreas clave para un análisis profesional.
        </p>
      </div>

      <div className="row g-4">
        {modules.map((title, i) => (
          <div className="col-md-6 col-lg-4 animate-fade-in delay-card" key={i}>
            <div className="module-card d-flex align-items-center p-3 shadow-sm rounded-4 ao-card-float">
              <div className="module-icon me-3 pending">{i + 1}</div>
              <div>
                <h5 className="fw-semibold mb-1">{title}</h5>
                <span className="small text-secondary">Módulo {i + 1}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
