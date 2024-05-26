import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  getDoc,
  deleteDoc,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { db, auth } from "../FirebaseConfig";

export const getLikedLandmarks = async () => {
  try {
    const userId = auth.currentUser.uid;
    const q = query(
      collection(db, "landmarks"),
      where("likes", "array-contains", userId)
    );

    const querySnapshot = await getDocs(q);
    const likedLandmarks = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return likedLandmarks;
  } catch (error) {
    console.error("Error getting liked landmarks:", error);
    return [];
  }
};

export const toggleLike = async (landmarkId) => {
  "it enters and this is the id", landmarkId;
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
      querySnapshot.forEach(async (doc) => {
        await deleteDoc(doc.ref);
      });
      return false;
    } else {
      await addDoc(collection(db, "likes"), {
        userId,
        landmarkId,
      });
      return true;
    }
  } catch (error) {
    console.error("Error toggling like status:", error);
    return null;
  }
};
export const likeOrUnlike = async (landmarkId) => {
  const userId = auth.currentUser?.uid;
  if (!userId) {
    throw new Error("User is not authenticated");
  }
  try {
    const landmarkRef = doc(db, "landmarks", landmarkId);

    const landmarkDoc = await getDoc(landmarkRef);
    if (!landmarkDoc.exists()) {
      console.error("Landmark document does not exist.");
      return;
    }

    const likes = landmarkDoc.data().likes || [];

    if (likes.includes(userId)) {
      await updateDoc(landmarkRef, {
        likes: arrayRemove(userId),
      });
    } else {
      await updateDoc(landmarkRef, {
        likes: arrayUnion(userId),
      });
    }

    console.log("Likes updated successfully.");
  } catch (error) {
    console.error("Error updating likes:", error);
  }
};
