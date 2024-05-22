import { useState, useEffect } from "react";
import { getLikedLandmarks } from "../services/likedLandmarks";

const useLikedLandmarks = () => {
  const [likedLandmarks, setLikedLandmarks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLikedLandmarks = async () => {
      try {
        const landmarks = await getLikedLandmarks();
        setLikedLandmarks(landmarks);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLikedLandmarks();
  }, []);

  return { likedLandmarks, loading, error };
};

export default useLikedLandmarks;
