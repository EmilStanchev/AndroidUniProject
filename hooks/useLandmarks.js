import { useQuery } from "react-query";
import { getLandmarks } from "../services/landmarks";

const useLandmarks = () => {
  const {
    data: landmarks,
    isLoading: loading,
    error,
    refetch: landmarksRefetch,
  } = useQuery("landmarks", getLandmarks);

  return { landmarks, loading, error, landmarksRefetch };
};

export default useLandmarks;
