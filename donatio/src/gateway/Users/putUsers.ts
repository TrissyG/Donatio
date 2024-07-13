import { db } from "@/firebase/setup";
import { doc, updateDoc } from "firebase/firestore";

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
    console.log("Challenge marked as completed!");
  } catch (error) {
    console.error("Error updating challenge: ", error);
  }
}
