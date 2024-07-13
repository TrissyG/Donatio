import { db } from "@/firebase/setup";
import { doc, updateDoc } from "firebase/firestore";
import { claimReward } from "../Challenges/putChallenges";

export async function addDonuts(
  userId: string,
  donuts: number,
  currentDonuts: number,
  currentDonutsEarned: number
) {
  try {
    const usersDocRef = doc(db, "users", userId);
    await updateDoc(usersDocRef, {
      donuts: currentDonuts + donuts,
      donuts_earned: currentDonutsEarned + donuts,
    });
    await claimReward("1");
    console.log("Challenge marked as completed!");
  } catch (error) {
    console.error("Error updating challenge: ", error);
  }
}
