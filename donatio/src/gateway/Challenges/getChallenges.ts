import { db } from "@/firebase/setup";
import { Challenge } from "@/types/types";
import { collection, getDocs } from "@firebase/firestore";

export async function getChallenges() {
  try {
    const challengesCollection = collection(db, "challenges");
    const challengesSnapshot = await getDocs(challengesCollection);
    const challengesList = challengesSnapshot.docs.map((doc) => doc.data());
    return challengesList as Challenge[];
  } catch (error) {
    console.error("Error fetching posts: ", error);
  }
}
