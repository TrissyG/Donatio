import { db } from "@/firebase/setup";
import { User } from "@/types/types";
import { collection, getDocs } from "@firebase/firestore";

export async function getUsers() {
  try {
    const usersCollection = collection(db, "users");
    const userSnapshot = await getDocs(usersCollection);
    const userList = userSnapshot.docs.map((doc) => doc.data());
    return userList as User[];
  } catch (error) {
    console.error("Error fetching users: ", error);
  }
}
