import { db } from "@/firebase/setup";
import { doc, updateDoc } from "firebase/firestore";

export async function completeChallenge(challengeId: string) {
  try {
    const challengeDocRef = doc(db, "challenges", challengeId);
    await updateDoc(challengeDocRef, {
      isCompleted: true,
    });
    console.log("Challenge marked as completed!");
  } catch (error) {
    console.error("Error updating challenge: ", error);
  }
}

export async function claimReward(challengeId: string) {
  try {
    const challengeDocRef = doc(db, "challenges", challengeId);
    await updateDoc(challengeDocRef, {
      isClaimed: true,
    });
    console.log("Challenge marked as claimed!");
  } catch (error) {
    console.error("Error updating challenge: ", error);
  }
}
