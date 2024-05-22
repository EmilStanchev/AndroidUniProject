import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  getDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db, auth } from "../FirebaseConfig";

export const getLikedLandmarks = async () => {
  const userId = auth.currentUser?.uid;
  if (!userId) {
    throw new Error("User is not authenticated");
  }

  const likesQuery = query(
    collection(db, "likes"),
    where("userId", "==", userId)
  );

  const likesSnapshot = await getDocs(likesQuery);
  const likedLandmarkIds = likesSnapshot.docs.map(
    (doc) => doc.data().landmarkId
  );

  if (likedLandmarkIds.length === 0) {
    return [];
  }
  const landmarksQuery = query(
    collection(db, "landmarks"),
    where("__name__", "in", likedLandmarkIds)
  );

  const landmarksSnapshot = await getDocs(landmarksQuery);
  const likedLandmarks = landmarksSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return likedLandmarks;
};
export const toggleLike = async (landmarkId) => {
  console.log("it enters and this is the id", landmarkId);
  try {
    const userId = auth.currentUser?.uid;
    if (!userId) {
      throw new Error("User is not authenticated");
    }

    const querySnapshot = await getDocs(
      query(
        collection(db, "likes"),
        where("userId", "==", userId),
        where("landmarkId", "==", landmarkId)
      )
    );
    if (!querySnapshot.empty) {
      // If a like document exists, delete it (unlike)
      querySnapshot.forEach(async (doc) => {
        await deleteDoc(doc.ref);
      });
      return false; // Return false to indicate unliking
    } else {
      // If no like document exists, add it (like)
      await addDoc(collection(db, "likes"), {
        userId,
        landmarkId,
      });
      return true; // Return true to indicate liking
    }
  } catch (error) {
    console.error("Error toggling like status:", error);
    return null; // Return null to indicate an error
  }
};
