// useLandmarks.js

import { useState, useEffect } from "react";
import { getLandmarks } from "../services/landmarks";

const useLandmarks = () => {
  const [landmarks, setLandmarks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLandmarks = async () => {
      try {
        const data = await getLandmarks();
        setLandmarks(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchLandmarks();
  }, []);

  return { landmarks, loading, error };
};

export default useLandmarks;
