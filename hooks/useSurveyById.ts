"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/axios";

export const useSurveyById = (id: number) => {
  const [survey, setSurvey] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadSurvey = async () => {
    try {
      setLoading(true);
      const res = await api.get(`/assesment-form-back/v1/surveys/${id}`);

      setSurvey(res.data.success);
    } catch (err: any) {
      setError(err.message || "Error loading survey");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) loadSurvey();
  }, [id]);

  return { survey, loading, error };
};
