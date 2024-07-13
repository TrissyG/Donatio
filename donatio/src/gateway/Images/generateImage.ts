import axios from "axios";

export default async function generateImage(image: Blob, prompt: string) {
  const payload = {
    image: image,
    prompt: prompt,
    output_format: "jpeg",
    strength: 0.1,
    mode: "image-to-image",
  };

  const response = await axios.postForm(
    `https://api.stability.ai/v2beta/stable-image/generate/sd3`,
    axios.toFormData(payload, new FormData()),
    {
      validateStatus: undefined,
      responseType: "arraybuffer",
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
        Accept: "image/*",
      },
    }
  );

  if (response.status === 200) {
    return Buffer.from(response.data);
  } else {
    throw new Error(`${response.status}: ${response.data.toString()}`);
  }
}
