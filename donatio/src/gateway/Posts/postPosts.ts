import { db } from "@/firebase/setup";
import { Post } from "@/types/types";
import { collection, addDoc } from "@firebase/firestore";

export async function createPost(
  newPost: Omit<Post, "image">,
  imageUrl: String
) {
  try {
    const postWithImage = { ...newPost, image: imageUrl };

    const postsCollection = collection(db, "posts");
    await addDoc(postsCollection, postWithImage);

    console.log("Post created successfully!");
  } catch (error) {
    console.error("Error creating post: ", error);
  }
}
