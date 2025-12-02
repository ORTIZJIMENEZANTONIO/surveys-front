"use client";

import { useParams } from "next/navigation";
import { useSurveyById } from "@/hooks/useSurveyById";
import { useEffect, useState } from "react";

export default function SurveyPage() {
  const params = useParams();
  const surveyId = Number(params.id);

  const { survey, loading, error } = useSurveyById(surveyId);

  const [currentSection, setCurrentSection] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  if (loading) return <p className="text-center py-5">Cargando...</p>;
  if (error) return <p className="text-danger text-center">{error}</p>;
  if (!survey) return null;

  // NORMALIZACIÓN
  const sections = survey.sections ?? [];
  if (sections.length === 0) return <p>No hay secciones.</p>;

  const section = sections[currentSection];
  if (!section) return <p>Sección no encontrada.</p>;

  const questions = section.questions ?? [];
  if (questions.length === 0) return <p>No hay preguntas en esta sección.</p>;

  const question = questions[currentQuestion];
  if (!question) return <p>Cargando pregunta...</p>;

  const selectedOptionId = question.responses?.[0]?.option?.id;

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lx-6 text-center">
          {/* ========================
          HEADER
      ======================== */}
          <div className="mb-4">
            <h1 className="fw-bold" style={{ color: "var(--ao-purple)" }}>
              {survey.name}
            </h1>
            <p className="text-muted">{survey.description}</p>
          </div>

          {/* ========================
          STEPPER DE SECCIONES
      ======================== */}
          <div className="ao-stepper mb-2 pt-2 px-2 justify-content-between">
            {sections.map((sec, idx) => (
              <div
                key={sec.id}
                className={`ao-step ${idx === currentSection ? "active" : ""}`}
                onClick={() => {
                  setCurrentSection(idx);
                  setCurrentQuestion(0);
                }}
              >
                {idx + 1}
              </div>
            ))}
          </div>

          {/* ========================
          SECCIÓN
      ======================== */}
          <h5
            className="text-center mb-3"
            style={{ color: "var(--ao-purple)" }}
          >
            {section.name}
          </h5>

          {/* ========================
          CARD DE PREGUNTA
      ======================== */}
          <div className="card shadow rounded-3 mb-4 text-center">
            <div className="card-header">
              <h5 className="card-title ">{question.name}</h5>
              <span className="text-body-secondary fw-lighter fst-italic">
                Pregunta {currentQuestion + 1} de {questions.length}
              </span>
            </div>
            <div className="card-body">
              <div className="list-group">
                {question.options.map((opt) => (
                  <label
                    key={opt.id}
                    className={`list-group-item d-flex justify-content-center align-items-center gap-2 py-3 my-2 border rounded-3 ${
                      selectedOptionId === opt.id ? "ao-option-selected" : ""
                    }`}
                    style={{ cursor: "pointer" }}
                  >
                    <input
                      type="radio"
                      className="ao-radio-hidden"
                      name={`q-${question.id}`}
                      value={opt.id}
                      defaultChecked={selectedOptionId === opt.id}
                    />
                    {opt.optionText}
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* ========================
          NAVEGACIÓN
      ======================== */}
          <div className="d-flex justify-content-between mt-4">
            <button
              className="btn btn-outline-secondary"
              disabled={currentQuestion === 0}
              onClick={() => setCurrentQuestion((prev) => prev - 1)}
            >
              ← Atrás
            </button>

            <button
              className="btn btn-primary"
              onClick={() => {
                if (currentQuestion < section.questions.length - 1) {
                  setCurrentQuestion((prev) => prev + 1);
                } else if (currentSection < sections.length - 1) {
                  setCurrentSection((prev) => prev + 1);
                  setCurrentQuestion(0);
                }
              }}
            >
              Siguiente →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
