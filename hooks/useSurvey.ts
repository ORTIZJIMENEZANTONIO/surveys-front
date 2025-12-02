"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/axios";

export const useSurvey = () => {
  const [surveys, setSurveys] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getSurveyById = async (id: number) => {
    try {
      setLoading(true);
      setError(null);

      const response = await api.get(`/assesment-form-back/v1/surveys/${id}`);
      console.log("Diagnostic data:", response.data);

      return response.data.success;
    } catch (err: any) {
      setError(err.message || "Error fetching diagnostic data");
    } finally {
      setLoading(false);
    }
  };

  const getSurveys = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await api.get("/assesment-form-back/v1/surveys", {
        timeout: 6000, // IMPORTANTE en Next
      });

      const data = response.data?.success ?? [];

      setSurveys(data);
    } catch (err: any) {
      setError(err.message || "Error fetching diagnostic data");
      setSurveys([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSurveys();

    // retry silencioso
    const retry = setTimeout(() => {
      if (surveys.length === 0 && !loading) {
        getSurveys();
      }
    }, 1200);

    return () => clearTimeout(retry);
  }, []);

  return { surveys, loading, error, reload: getSurveys, getSurveyById };
};
