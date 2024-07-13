"use server";
import fs from "fs";

export default async function generateImage(formData: any) {
  formData.append("mode", "image-to-image");
  formData.append("strength", "0.7");
  formData.append("output_format", "png");
  formData.append("model", "sd3-medium");
  console.log(formData);
  try {
    const response = await fetch(
      "https://api.stability.ai/v2beta/stable-image/generate/sd3",
      {
        method: "POST",
        headers: {
          Accept: "image/*",
          Authorization: "Bearer sk-",
        },
        body: formData,
      }
    );

    const buffer = await response.arrayBuffer();

    fs.writeFile("plswork.png", Buffer.from(buffer), () =>
      console.log("finished downloading!")
    );
  } catch (error) {
    console.error(error);
  }
}
