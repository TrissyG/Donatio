import axios from "axios";

export default async function generateImage(image: Blob, prompt: string) {
  const payload = {
    image: image,
    prompt: prompt,
    output_format: "jpeg",
    strength: 0.75,
    mode: "image-to-image",
  };

  const response = await axios.postForm(
    `https://api.stability.ai/v2beta/stable-image/generate/sd3`,
    axios.toFormData(payload, new FormData()),
    {
      validateStatus: undefined,
      responseType: "arraybuffer",
      headers: {
        Authorization: `Bearer sk-CtFeh9xDCNMqQH1B3zwHMAvMZFO1VJKTffaqVQE2wuOrxpBW`,
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
