import { db } from "@/firebase/setup";
import { doc, collection } from "@firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

export async function postImage(image: Blob) {
  const storage = getStorage();
  const randomId = doc(collection(db, "temp")).id;
  const storageRef = ref(storage, `posts/${randomId}`);

  try {
    await uploadBytes(storageRef, image);

    const imageUrl = await getDownloadURL(storageRef);
    return imageUrl;
  } catch (error) {
    throw new Error("Failed to upload image");
  }
}
