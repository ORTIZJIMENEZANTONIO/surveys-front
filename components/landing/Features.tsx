"use client";

export default function Features() {
  const features = [
    { icon: "bi-graph-up", title: "Diagnósticos inteligentes" },
    { icon: "bi-lightning-charge", title: "Procesos más rápidos" },
    { icon: "bi-check2-circle", title: "Decisiones con datos" },
  ];

  return (
    <section className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold text-dark animate-fade-in">
          ¿Por qué AO Insight Engine?
        </h2>
        <p className="text-secondary animate-fade-in delay-2">
          Diseñado para análisis empresariales profesionales impulsados por IA.
        </p>
      </div>

      <div className="row g-4">
        {features.map((f, i) => (
          <div key={i} className="col-md-4">
            <div className="card h-100 border-0 shadow-sm p-4 rounded-4 ao-card-float">
              <i className={`bi ${f.icon} fs-1 mb-3 ao-feature-icon`}></i>
              <h5 className="fw-bold">{f.title}</h5>
              <p className="text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
