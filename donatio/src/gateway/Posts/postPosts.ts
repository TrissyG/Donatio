import { db, storage } from "@/firebase/setup";
import { Post } from "@/types/types";
import { collection, addDoc } from "@firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export async function createPost(
  newPost: Omit<Post, "image">,
  imageFile: File
) {
  try {
    const storageRef = ref(storage, `images/${imageFile.name}`);

    const snapshot = await uploadBytes(storageRef, imageFile);
    const imageUrl = await getDownloadURL(snapshot.ref);

    const postWithImage = { ...newPost, image: imageUrl };

    const postsCollection = collection(db, "posts");
    await addDoc(postsCollection, postWithImage);

    console.log("Post created successfully!");
  } catch (error) {
    console.error("Error creating post: ", error);
  }
}
