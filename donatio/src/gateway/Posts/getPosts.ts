import { db } from "@/firebase/setup";
import { Post } from "@/types/types";
import { collection, getDocs } from "@firebase/firestore";

export async function getPosts() {
  try {
    const postsCollection = collection(db, "posts");
    const postSnapshot = await getDocs(postsCollection);
    const postList = postSnapshot.docs.map((doc) => doc.data());
    return postList as Post[];
  } catch (error) {
    console.error("Error fetching posts: ", error);
  }
}
