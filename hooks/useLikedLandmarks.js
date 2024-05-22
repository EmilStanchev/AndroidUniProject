// hooks/useLikedLandmarks.js
import { useQuery } from "react-query";
import { getLikedLandmarks } from "../services/likedLandmarks";

const useLikedLandmarks = () => {
  const { data: likedLandmarks = [], refetch } = useQuery(
    "likedLandmarks",
    getLikedLandmarks
  );

  return { likedLandmarks, refetch };
};

export default useLikedLandmarks;
