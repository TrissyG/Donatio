import axios from "axios";

export default async function generateImage(image: Blob, prompt: string) {
  const payload = {
    image: image,
    prompt: prompt,
    output_format: "jpeg",
    control_strength: 0.7,
    mode: "image-to-image",
    model: "sd3-medium",
    negative_prompt: "",
  };

  const response = await axios.postForm(
    `https://api.stability.ai/v2beta/stable-image/control/sketch`,
    axios.toFormData(payload, new FormData()),
    {
      validateStatus: undefined,
      responseType: "arraybuffer",
      headers: {
        Authorization: `Bearer sk-KgsmsMZS81ECU95N58A85ZkZrvrY0n1EmhIjii7SrnDaqFew`,
        Accept: "image/*",
      },
    }
  );

  if (response.status === 200) {
    try {
      const buffer = Buffer.from(response.data);
      return new Blob([buffer]);
    } catch (error) {
      console.error(error);
      throw new Error("Failed to generate image");
    }
  } else {
    throw new Error(`${response.status}: ${response.data.toString()}`);
  }
}
