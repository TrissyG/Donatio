"use server";
import fs from "fs";

export default async function generateImage(image: any, prompt: string) {
  const formData = new FormData();
  formData.append("mode", "image-to-image");
  formData.append("strength", "0.7");
  formData.append("output_format", "png");
  formData.append("model", "sd3-medium");
  formData.append("image", image);
  formData.append("prompt", prompt);
  try {
    const response = await fetch(
      "https://api.stability.ai/v2beta/stable-image/generate/sd3",
      {
        method: "POST",
        headers: {
          Accept: "image/*",
          Authorization:
            "Bearer sk-X5ADjsKVF9QHHMEq1gWb7BhztB4IdNn36n2nv5JfUwrEGFys",
        },
        body: formData,
      }
    );

    const buffer = await response.arrayBuffer();

    fs.writeFile("<DEFAULT_IMAGE_NAME>.png", Buffer.from(buffer), () =>
      console.log("finished downloading!")
    );
  } catch (error) {
    console.error(error);
  }
}
